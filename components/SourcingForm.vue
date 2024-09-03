<template>
	<el-form
		ref="formRef"
		class="local_form"
		label-position="top"
		size="large"
		:model="params"
		:rules="rules"
	>
		<el-form-item label="Email" prop="email">
			<el-input v-model="params.email" />
		</el-form-item>
		<el-form-item label="Product’s Name" name="name">
			<el-input v-model="params.name" />
		</el-form-item>
		<el-form-item label="Other Information" name="area">
			<el-input type="textarea" v-model="params.area" :autosize="{ minRows: 4, maxRows: 6 }" />
		</el-form-item>
		<el-form-item label="Product Pictures" name="fileList">
			<el-upload
				v-model:file-list="params.fileList"
				action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
				list-type="picture-card"
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
			<el-button type="primary" class="w-full" round @click="onSubmit" :loading="loading">
				Submit
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import type { FormInstance, FormRules, UploadProps, UploadUserFile } from 'element-plus'
const formRef = ref<FormInstance>()
const params = reactive({
	email: '',
	name: '',
	area: '',
	fileList: [
		{
			name: 'food.jpeg',
			url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
		},
		{
			name: 'plant-1.png',
			url: '/images/plant-1.png',
		}
	],
})
const rules: FormRules = {
	email: [
		{
			type: 'email',
			message: 'Please input correct email address',
			trigger: ['blur', 'change']
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
			console.log('submit!')
			setTimeout(() => {
				loading.value = false
				console.error(params, 'params')
			}, 1000)
		} else {
			console.log('error submit!', fields)
		}
	})
}

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
	console.log(uploadFile, uploadFiles)
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
