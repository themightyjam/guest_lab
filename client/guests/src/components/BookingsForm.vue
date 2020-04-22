<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name"/>
    </div>
    <div class="formWrap">
      <label for="room">Room:</label>
      <input type="number" id="room" v-model="room"/>
    </div>
    <div class="formWrap">
			<label for="date">Date:</label>
			<input type="date" id="date" v-model="date" />
		</div>

    	<input type="submit" value="Save" id="save"/>
    </form>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
