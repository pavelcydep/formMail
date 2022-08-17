$("#button").on("click",function(){
    var name=$("#name").val().trim();
    var phone=$("#phone").val().trim();
    var email=$("#email").val().trim();
if(email == ""){
    $("#error").text("Введите email");
    
    return false;
}else if(name == ""){
    $("#error").text("Введите имя");
    return false;
}
else if(phone == ""){
    $("#error").text("Введите телефон");
    return false;
}
$("#error").text("");


$.ajax({
    url:'/assets/ajax/mail.php',
    type:'POST',
    cache:false,
    data:{'name':name,'email':email,'phone':phone},
    dataType:"html",
    beforeSend: function(){
        $("#button").prop("disabled",true);
        
    },
    success:function(data){
      if(!data){
        alert("Были ошибки,сообщение не отправлено!");}
        else 
        $("#form").trigger("reset");
        $("#button").prop("disabled",false);
        alert("Были ошибки,сообщение отправлено!");
        $(".modal").toggle();
        setTimeout(() => {
            $(".modal").hide();
        }, 2000);
       
       
    }
});
});