
  $(document).ready(function(){
    var id = '';
    $("input").click(function(){
      id = $(this).data();
    });
    $("#btnxoa").click(function(){
     
      $.ajax({
        type: "get",
        url: "/index/"+id.id,
      }).done(function (data) {
        alert('xoa thanh cong')
        
      });
    });
  });
