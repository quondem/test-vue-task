<template>
	<header>
		<ul>
			<li><RouterLink to="/">Главная</RouterLink></li>
			<li><RouterLink to="/tasks">Задачи</RouterLink></li>
		</ul>
	</header>
	<RouterView />
</template>

<script setup>
	import { RouterView } from "vue-router";
</script>
