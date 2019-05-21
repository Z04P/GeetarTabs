<template>
    <form class="pure-form">
      <fieldset>
        <h4>Send me an e-mail</h4>
        <div class="message">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" class="pure-input-1-2" v-model="model.in1">
        </div>
        <div class="message">
          <label for="message-body">Message:</label>
          <textarea id="message-body" class="pure-input-1-2" v-model="model.in2"></textarea>
        </div>
        <div class="button-wrapper">
          <button id="send-button" type="submit" class="pure-button pure-button-primary" @click="sendMail" :disabled="isDisabled">Send</button>
        </div>
      </fieldset>
    </form>
</template>
<script>
export default {
    name: 'EmailForm',
    data () {
      return {
        model: {
          in1: '',
          in2: ''
        }
      }
    },
    methods: {
      sendMail () {
        let message = document.getElementById('message-body').value;
        let subject = document.getElementById('subject').value;
        document.location.href="mailto:d.morandarte23@gmail.com?subject="
          + encodeURIComponent(subject)
          + "&body=" + encodeURIComponent(message);
      }
    },
    computed: {
      isDisabled () {
        return !this.model.in1 || !this.model.in2;
      }
    }
}
</script>

<style scoped>
  .pure-form {
    width: 100%;
  }
  .message {
    margin: 0 5px 10px 5px;
  }
  .message input, .message textarea {
    width: 85%;
  }
  .message label {
    margin-right: 5px;
  }
  label[for=from] {
    margin-right: 32px;
  }
  label[for=subject] {
    margin-right: 16px;
  }
  .button-wrapper {
      margin: 5px;
  }
  .pure-button {
    display: inline-block;
    background-color: rgb(85, 29, 141);
  }
  .pure-button:hover {
    background-color: rgb(37, 19, 78);
    transition: 0.2s;
  }
  .pure-button:active {
    background-color: rgb(26, 15, 61);
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    transition: 0.5s;
  }
  @media only screen and (min-width: 0) and (max-width: 567px) {
    .message input, .message textarea {
      width: 100%;
    }
  }
  @media only screen and (min-width: 1195px) and (max-width: 1203px) {
    .message input, .message textarea {
      width: 80%;
    }
  }
</style>
