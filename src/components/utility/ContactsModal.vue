<template>
    <div id="ContactsModal" class="modal-mask flex" @click.self="$emit('close')">
        <div class="modal-container heavy-shadow">
            <div class="heading">
                Contacts!
            </div>
            <div class="body">
                <p>
                    <a href="https://www.linkedin.com/in/anh-ht-le/" target="_blank">LinkedIn</a>
                </p>
                <p>
                    <a href="https://github.com/ahtle" target="_blank">Github</a>
                </p>
                <p>
                    <a href="https://drive.google.com/file/d/0B7HUXC9DzzC1UVNDdjhDeWZzeTA/view?usp=sharing" target="_blank">Resume</a>
                </p>
                <p>
                    Email: <a href="mailto:anh.ht.le@gmail.com" target="_blank">anh.ht.le@gmail.com</a>
                </p>
                <p>
                    Phone: 408-649-1365
                </p>
            </div>
        </div>
    </div>
</template>

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
        width: 350px;
        margin: 0px auto;
        background-color: blue;
        padding: 8px 4px;
    .heading 
        position: absolute;
        top: 0;
        color: #fcfc54;
        border-left: 2px solid #fff;
        border-right: 2px solid #fff;
        padding-left: 4px;
        padding-right: 4px;
        width: 100px;
        margin-left: -50px;
        left: 50%;
        background-color: blue;
        font-size: 0.8em;
    .body
        border: 4px double #fff;
        width: 100%;
        height: 100%;
        padding: 20px 10px 10px;
        p
            text-align: left;
            margin: 0;
            a
                color: white;
</style>