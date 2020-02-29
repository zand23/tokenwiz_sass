<template>
<div class="container">
<div class="row">
<div class="col-lg-6">
<div class="card">
<form class="p-3  text-left" action="/action_page.php" method="get">
<h6 class="title">Customer Info</h6>
<h1 class="item-label">Full Name</h1>
<input  class="input-item input-bordered" type="text">
<small>Please enter Your Full Name</small>
<h1 class="item-label">Email address</h1>
<input  class="input-item input-bordered" type="text">
<small>We'll never share your email with anyone else</small>
<h1 class="item-label">Phone No</h1>
<input  class="input-item input-bordered" type="text">
<h1 class="item-label">COMMUNICATION</h1>
<h1 class="item-label">Your Message</h1>
<input  class="input-item input-bordered input-textarea" type="text">
<h1 class="item-label">Communication</h1>
<div  class="text-left">
<div class="row">
<div class="input-item  p-1">
<input  type="checkbox" checked="checked" name="radio">
<label>Emile</label>
</div>
<div class="input-item  p-1">
<input type="checkbox" checked="checked"  name="radio">
<label>SMS </label>
</div>
<div class="input-item p-1">
<input type="checkbox" checked="checked" name="radio">
<label>Phone</label>
</div>
</div>
<h1 class="item-label">Amount</h1>
<input  class="input-item input-bordered" type="text">
<small>Input your Payment Amount.</small>
<h1 class="item-label p-1">PAYMENT OPTIONS</h1>
<div class="row">
<div class="input-item  p-1">
<input  type="checkbox" checked="checked" name="radio">
<label>card</label>
</div>
<div class="input-item  p-1">
<input type="checkbox" checked="checked" name="radio">
<label>Bitcoin </label>
</div>
<div class="input-item p-1">
<input type="checkbox" checked="checked" name="radio">
<label>cash</label>
</div>
</div>
<div class="p-2">
<button class="btn btn-primary">Submit</button>
</div>
</div>
</form>
</div>
</div>
<div class="col-lg-6">
<div class="card">
<form class="p-3  text-left" action="/action_page.php" method="get">
<h6 class="title">Contact Form</h6>
<h1 class="item-label">First Name</h1>
<input  class="input-item input-bordered" type="text">
<h1 class="item-label">Last Name</h1>
<input  class="input-item input-bordered" type="text">
<h1 class="item-label">Your Email</h1>
<input  class="input-item input-bordered" type="text">
<small>We'll never share your email with anyone else</small>
<h1 class="item-label">Subject</h1>
<input  class="input-item input-bordered" type="text">
<h1 class="item-label">Your Email</h1>
<input  class="input-item input-bordered input-textarea" type="text">
<small>We'll never share your email with anyone else</small>
<h1 class="item-label">Subject</h1>
<input  class="input-item input-bordered" type="text">
<div  class="text-left">
<h1 class="item-label">Your Message</h1>
<input  class="input-item input-bordered-lg" type="text">
<div class="p-2">
<button class="btn btn-primary">Send Message</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-6 bg-white">
<div class="card-lg">
<form class="p-3  text-left" action="/action_page.php" method="get">
<h6 class="title">Customer Info s2</h6>
<h1 class="item-label">First Name</h1>
<input  class="input-item input-bordered" type="text">
</form>
</div>
</div>
<div class="col-lg-6 bg-white">
<div class="card-lg">
<form class="p-3  text-left" action="/action_page.php" method="get">
<h6 class="title">Customer Info s2</h6>
<h1 class="item-label">First Name</h1>
<input  class="input-item input-bordered" type="text">
</form>
</div>
</div>
</div>
<div class="row bg-white top-lg text-left">
<div class="col-lg-12 text-left">
<div class="card-lg">
<form class="p-3  text-left" action="/action_page.php" method="get">
<small class="text-left">Your Email</small>
<input  class="input-item input-bordered" type="text">
<small class="text-left">Your Message</small>
<input  class="input-item input-bordered-lg" type="text">
<div class="p-1">
<button class="btn">Send Message</button>
</div>
</form>
</div>
</div>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'ddsddsd'
    }
  }
}
</script>

<style lang="scss">
</style>
