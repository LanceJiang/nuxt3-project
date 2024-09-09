<template>
	<el-form
		ref="formRef"
		class="local_form"
		label-position="top"
		size="large"
		:model="params"
		:rules="rules"
	>
		<client-only>
			<el-form-item label="Email" prop="mailbox">
				<el-input v-model="params.mailbox" :maxlength="30" allowClear />
			</el-form-item>
			<el-form-item label="Product’s Name" prop="goodsName">
				<el-input v-model="params.goodsName" :maxlength="250" allowClear />
			</el-form-item>
			<el-form-item label="Other Information" prop="otherInfo">
				<el-input type="textarea" v-model="params.otherInfo" :autosize="{ minRows: 4, maxRows: 6 }" :maxlength="500" allowClear />
			</el-form-item>
			<el-form-item label="Product Pictures" prop="goodsImg">
				<el-upload
					v-model:file-list="params.goodsImg"
					:action="VITE_UPLOAD_URL"
					:maxCount="3"
					list-type="picture-card"
					accept="image/png,image/jpeg,image/jpg"
					:beforeUpload="beforeUpload"
					:onChange="handleChange"
					:on-preview="handlePictureCardPreview"
					:on-remove="handleRemove"
				>
					<el-icon class="icon"><Plus /></el-icon>
				</el-upload>

				<el-dialog v-model="dialogVisible">
					<img w-full :src="dialogImageUrl" alt="Preview Image" />
				</el-dialog>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" class="w-full" style="height: 40px !important;" round @click="onSubmit" :loading="loading">
					Submit
				</el-button>
			</el-form-item>
		</client-only>
	</el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules, UploadProps, UploadUserFile } from 'element-plus'
import { queryOpInfo, getRecommendAll1 } from '@/api/sourcing'
const VITE_UPLOAD_URL = 'https://jjz.feasyshopping.com/admin-api/infra/file/upload' // todo  .env.xxx

const { data, error, pending, execute } = useFetch('https://bdapi.hyinsight.com/admin-api/system/config-currency/page', {
	method: 'get',
	query: {
		pageNo: 1,
		pageSize: 100,
		status: 1
	},
	immediate: false
})
const testApi = () => {
	// console.log(/*JSON.stringify(process),*/ process.env.VITE_API_URL, process.env.VITE_UPLOAD_URL, 'VITE_UPLOAD_URL')
	execute()
	// console.error(data, 'data')
	getRecommendAll1().then(res => {
		console.error(res, 'res')
	})
}
const formRef = ref<FormInstance>()
const params = reactive({
	mailbox: undefined,
	goodsName: undefined,
	otherInfo: undefined,
	goodsImg: []/*[
		{
			name: 'food.jpeg',
			url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
		},
		{
			name: 'plant-1.png',
			url: '/images/plant-1.png',
		}
	],*/
})
const rules: FormRules = {
	mailbox: [
		{
			required: true,
			type: 'email',
			message: 'Please input correct email address',
			trigger: ['blur', 'change']
		}/*,
		{
			validator: (_rule, value: string) => {}
		}*/
	],
	goodsName: [
		{
			required: true,
			message: 'Please enter product name'
			// trigger: ['blur', 'change']
		}
	],
	goodsImg: [
		{
			required: true,
			validator: (_rule, value: any[], callback) => {
				if (!value || !value.length) {
					return callback('Please upload the picture')
				}
				callback()
			}
			// trigger: ['blur', 'change']
		}
	]
}
const loading = ref(false)
const onSubmit = async () => {
	const formEl: FormInstance | undefined = formRef.value
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			loading.value = true
			// console.log('submit!', params)
			const { goodsImg, ...others } = params
			const query: any = { ...others }
			if (Array.isArray(goodsImg) && goodsImg.length) {
				query.goodsImg = goodsImg.map(v => v.url).join(',')
			}
			queryOpInfo(query).then(res => {
				// 发布成功
				ElMessage.success('Posted successfully')
			}).finally(() => {
				loading.value = false
			})
		}/* else {
			console.log('error submit!', fields)
		}*/
	})
}

/*onMounted(() => {
	// console.log(JSON.stringify(process), 'process')
	// window.params = params
	// window.testApi = testApi
	testApi()
})*/
const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
	console.log(uploadFile, uploadFiles)
}
const beforeUpload = (file) => {
/*	const fileSuffix = file.name.substring(file.name.lastIndexOf('.'))
	const accepts = ['.png','.jpeg', '.jpg']
	const file_true = accepts.includes(fileSuffix)
	if (!file_true) {*/
	if (file.type.indexOf('image') < 0) {
		/*// (`上传文件只能是 ${accept} 格式!`)
		ElMessage.warning(`Only upload files in ${[accepts.join(',')]} format`)*/
		ElMessage.warning('Please upload the picture')
		return false
	}
	const fileMaxM = 5
	const isLt1M = file.size / 1024 / 1024 <= fileMaxM
	if (!isLt1M) {
		ElMessage.warning(`Only upload files up to ${fileMaxM}MB!`)
		// this.$message.error('上传图片大小不能超过 1MB!');
		return false
	}
	return true
}
function handleChange(file, fileList) {
	// console.log(JSON.stringify(file), 'file')
	// 检查上传状态
	if (file.status === 'success') {
		console.log('Upload success:', file.response);
		const fileRes = file.response // { data: 'path/to/image.jpg', code: 0 }
		const idx = fileList.findIndex((v) => v.uid === file.uid)
		if (idx > -1) {
			// 失败 删除
			if (fileRes.code) {
				fileList.splice(idx, 1)
			} else {
				// 成功 修改 url
				fileList[idx].url = fileRes.data
			}
		}
		params.goodsImg = fileList
	}
}
const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
	dialogImageUrl.value = uploadFile.url!
	dialogVisible.value = true
}
</script>

<style scoped lang="scss">
.local_form {
	//&:deep(.el-form) {
	:deep(.el-form-item) {
			//color: #212121;
			color: var(--secondary-color);
			margin-bottom: 40px;
			&__label {

			}
		  .el-upload-list--picture-card {
				--el-upload-list-picture-card-size: 132px;
			}
			.el-upload--picture-card {
				--el-upload-picture-card-size: 132px;
				.icon {
					font-size: 42px;
					color: #D9D9D9;
				}
			}
		}
	//}
}
</style>
