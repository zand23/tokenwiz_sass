<template>
<div class="container">
<div class="row">
<div class="col-lg-6">
<div class="card">
<form class="p-3  text-left" action="/action_page.php" method="get">
<h6 class="title">Form Validation - Regular</h6>
<h1 class="item-label">Full Name</h1>
<input  class="input-item input-bordered" type="text">
<h1 class="item-label">Phone Number</h1>
<input  class="input-item input-bordered" type="text">
<h1 class="item-label">Your Email</h1>
<input  class="input-item input-bordered" type="text">
<small>We'll never share your email with anyone else</small>
<h1 class="item-label">Subject</h1>
<input  class="input-item input-bordered" type="text">
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
<input type="checkbox"  name="radio">
<label>SMS </label>
</div>
<div class="input-item p-1">
<input type="checkbox"  name="radio">
<label>Phone</label>
</div>
</div>
<h1 class="item-label">Payment options</h1>
<div class="row">
<div class="input-item  p-1">
<input  type="radio" checked="checked" name="radio">
<label>card</label>
</div>
<div class="input-item  p-1">
<input type="radio" checked="checked" name="radio">
<label>Bitcoin </label>
</div>
<div class="input-item p-1">
<input type="radio" checked="checked" name="radio">
<label>cash</label>
</div>
</div>
<div class="p-2">
<button class="btn btn-primary">Send Message</button>
</div>
</div>
</form>
</div>
</div>
<div class="col-lg-6">
<div class="card">
<form class="p-3  text-left" action="/action_page.php" method="get">
<h6 class="title">Form Validation -  Alternate</h6>
<h1 class="item-label">Full Name</h1>
<input  class="input-item input-bordered" type="text">
<h1 class="item-label">Phone Number</h1>
<input  class="input-item input-bordered" type="text">
<h1 class="item-label">Your Email</h1>
<input  class="input-item input-bordered" type="text">
<small>We'll never share your email with anyone else</small>
<h1 class="item-label">Subject</h1>
<input  class="input-item input-bordered" type="text">
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
<input type="checkbox"  name="radio">
<label>SMS </label>
</div>
<div class="input-item p-1">
<input type="checkbox"  name="radio">
<label>Phone</label>
</div>
</div>
<h1 class="item-label">Payment options</h1>
<div class="row">
<div class="input-item  p-1">
<input  type="radio" checked="checked" name="radio">
<label>card</label>
</div>
<div class="input-item  p-1">
<input type="radio" checked="checked" name="radio">
<label>Bitcoin </label>
</div>
<div class="input-item p-1">
<input type="radio" checked="checked" name="radio">
<label>cash</label>
</div>
</div>
<div class="p-2">
<button class="btn btn-primary">Send Message</button>
</div>
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
