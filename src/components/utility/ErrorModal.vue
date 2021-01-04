<template>
    <div id="ErrorModal" class="modal-mask flex" @click.self="$emit('close')">
        <div class="modal-container heavy-shadow">
            <div class="error-heading">
                Error!
            </div>
            <div class="error-body flex">
                <p>permission denied</p>
            </div>
        </div>
    </div>
</template>

<script>
    method: {
    }
</script>

<style lang="sass" scoped>
    .modal-mask 
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    .modal-container
        position: relative;
        width: 280px;
        height: 100px;
        margin: 0px auto;
        background-color: #a90201;
        padding: 8px 4px;
    .error-heading 
        position: absolute;
        top: 0;
        color: #fcfc54;
        border-left: 2px solid #fff;
        border-right: 2px solid #fff;
        padding-left: 4px;
        padding-right: 4px;
        width: 70px;
        margin-left: -35px;
        left: 50%;
        background-color: #a90201;
        font-size: 0.8em;
    .error-body
        border: 4px double #fff;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        p
            margin: 0;
</style>