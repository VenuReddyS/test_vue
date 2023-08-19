<template>
    <div class="sa-f-up-attach">
        <div class="sa-f-up-att">
            <form id="formUpload" name="formUpload" enctype="multipart/form-data">
                <input type="file" ref="fileInput" @change="onFileChange" multiple id="filename" name="filename" class="sa-d-none" />
            </form>
            <!-- <button class="sa-btn-transparent sa-chat-none" @click="selectImages">
                <i class="icon-logout3"></i>
                <span class="sa-info-text"> Upload </span>
            </button> -->
        </div>
        <!-- <ul class="sa-up-att-list" v-if="imageFiles && imageFiles.length">
            <li v-for="img in imageFiles" :key="img.link">
                <figure v-if="isImage(getFileExtension(img.filename))" @click="imagePop(img)">
                    <img :src="img.link" class="sa-img-cover" alt="avtar" />
                </figure>
                <a :href="img.link" target="_blank" rel="noopener" aria-label="download" download v-else>
                    <i :class="`icon-${getFileExtension(img.filename).toLowerCase()}`" v-if="img.filename"></i>
                </a>
                <span v-if="showName">{{ img.filename }}</span>
                <button class="sa-delete sa-btn-transparent" aria-label="delete-icon" @click="removeFile(img)" v-if="showDelete">
                    <i class="icon-delete1"></i>
                </button>
            </li>
        </ul> -->
        <!-- <image-popup v-if="viewImg" :imageUrlPOP="activeImg" @close-pop="closePop" /> -->
    </div>
</template>

<script>
// import ImagePopup from './ImagePopup.vue';
export default {
    // components: {
    //     ImagePopup
    // },
    // emits: ['file-upload','remove-file'],
    // props: {
    //     reportsFile: {
    //         type: Array
    //     },
    //     showUpload: {
    //         type: Boolean,
    //         default: () => true
    //     },
    //     showName: {
    //         type: Boolean,
    //         default: () => true
    //     },
    //     showDelete: {
    //         type: Boolean,
    //         default: () => true
    //     }
    // },
    data() {
        return {
            filename: '',
            imageFiles: [],
            element: "",
            viewImg: false,
        };
    },
    methods: {
        getFileExtension(fileName) {
            if(fileName){
                let fileType = fileName.split(".").pop();
                return fileType;
            }
        },
        isImage(ext) {
            if (!ext) {
                return false;
            }
            const imgFtypes = ["jpg", "jpeg", "png", "PNG", "gif", "bmp", "tif", "tiff", "eps", "svg", "raw", "jfif"]
            return imgFtypes.indexOf(ext) !== -1;
        },
        selectImages() {
            this.$refs.fileInput.click()
        },
        closePop: function () {
            this.viewImg = false
        },
        imagePop(img) {
            this.viewImg = true
            this.activeImg = img.link
        },
        async onFileChange(e) {
            console.log('e', e)
            let formData = new FormData()
            for (let file of e.target.files) {
                formData.append("filename", file)
            }
            formData.append("data", {
                uploadtype: "doc"
            })
            console.log('FORMDATA', formData)
            const response = await this.$store.dispatch('common/MEDIA_UPLOAD', formData)
            console.log('res', response)
            if (response && response.data && response.data.length) {
            //     for (let img of response.data) {
            //         this.imageFiles.push({
            //             link: img.url,
            //             filename: img.filename
            //         })
            //     }
                this.$emit('file-upload', response.data)
            //     this.$store.commit('user/SET_FILE_UPLOADS', this.imageFiles)
            }
        },
        removeFile(img) {
            this.imageFiles = this.imageFiles.filter(_ => _.link != img.link)
            this.$emit('remove-file', img)
            this.$store.commit('user/SET_FILE_UPLOADS', this.imageFiles)
        }
    }
}
</script>
