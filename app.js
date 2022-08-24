//ในการแสดงรหัสผ่านเราต้องเปลี่ยน type ใน input จาก password เป็น type="Text" มันจะแสดงให้เราเห็นรหัสผ่านขึ้นมาโดยต้องคลิกรูปตา
//ดักจับอีเว้นการคลิก
const eyeIcon = document.getElementById('eye')
const passwordEl = document.getElementById('password')

//ควบคุมไอคอน
eyeIcon.addEventListener("click",()=>{
    //เปลี่ยนรูปแบบไอคอน เป็น eye slash contains เป็นการเปรียบเทียบชื่อคลาส
    if(eyeIcon.classList.contains("fa-eye")){
        eyeIcon.classList.replace("fa-eye","fa-eye-slash") //หากมีการคลิกให้เปลี่ยน(ใช้คำสั่ง replace) จาก eye เป็น eye-slash
        //เปลี่ยน type 
        passwordEl.setAttribute("type","text")
    }else{
        eyeIcon.classList.replace("fa-eye-slash","fa-eye") //ถ้าคลิกอีกรอบกลับเป็นเหมือนเดิม
        //เปลี่ยน type 
        passwordEl.setAttribute("type","password")
    }
})


