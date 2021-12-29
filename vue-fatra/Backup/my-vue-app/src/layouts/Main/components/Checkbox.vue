<template>
    <div class="flex items-center justify-between">
            <h1 class="font-bold text-md mt-4 pl-5">Discover Spaces</h1>
            <div class="relative inline-block w-10  align-middle select-none transition duration-200 ease-in mt-5 mr-4">
                <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
    </div>
</template>
<style scoped>
    .toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68D391;
    }
    .toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68D391;
    }
</style>