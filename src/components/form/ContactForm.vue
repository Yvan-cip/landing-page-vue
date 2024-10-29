<script setup lang="ts">
import { ref } from 'vue'
import TextH3 from '../typography/TextH3.vue'
import InputText from '../ui/InputText.vue'
import InputTextarea from '../ui/InputTextarea.vue'
import ButtonPrimary from '../ui/ButtonPrimary.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  if (!name.value || !email.value || !message.value) {
    alert('Veuillez remplir tous les champs.')
    return
  }

  alert('Votre message a été envoyé avec succès!')

  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <div
    class="min-w-[450px] rounded-[20px] bg-light_background shadow flex flex-col text-center justify-center gap-y-[45px] py-[52px] px-[50px]"
  >
    <TextH3 title="Contact Us" />
    <InputText label="Your Name" v-model="name" />
    <InputText label="Your Email" v-model="email" />
    <InputTextarea label="Your Message" v-model="message" />
    <div class="w-1/2">
      <ButtonPrimary text="Send" @click="handleSubmit" />
    </div>
  </div>
</template>
