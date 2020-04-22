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
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email">
    </div>
    <div class="formWrap">
			<label for="date">Date:</label>
			<input type="date" id="date" v-model="date" />
		</div>
    <div class="formWrap">
      <label> Checked-in? </label>
      <select class="checked_in" v-model="checked_in">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    	<input type="submit" value="Save" id="save"/>
    </form>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';

export default {
  name: "bookings-form",
  data(){
  return {
    name: "",
    room: null,
    email: "",
    date: null,
    checked_in: "yes"
  }
},
methods: {
  handleSubmit(event){
    event.preventDefault();
    const payload = {
      name: this.name,
      room: this.room,
      email: this.email,
      date: this.date,
      checked_in: this.checked_in
    };

    BookingService.postBooking(payload)
    .then(booking => {
      eventBus.$emit('booking-added', booking);
    });
    }
  }
}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>
