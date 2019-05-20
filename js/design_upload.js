// design upload by Kim
// 2018. 03. 28
$(function(){


    $("#btnModify").click(function(){
    	var $slug = $(this).attr("data-slug");
    	window.location.href="/startproject/my-project/"+$slug;
    });


    $("#btnPublish").click(function(){
    	var $project_id = $(this).attr("data-project-id");

		$('body').removeClass();
		$('body').addClass('modal_gray_bg');
        $('#design_back_wrapper').show();

    });

    $("#btnJstClose").click(function(){
		$('body').removeClass('modal_gray_bg');
        $('#design_back_wrapper').hide();
    });

    $("#btnMakePublish").click(function(){
    	var $project_id = $("#btnPublish").attr("data-project-id");
    	window.location.href="/startproject/submit-project/"+$project_id;
    });


    // �대�吏� 誘몃━ 蹂닿린
    $(".show_preview_image").click(function(event){

        var pos_x = event.pageX;
        var pos_y = event.pageY;

        var imgsrc = "/upload/design_project/main_img/commoncard/"+$(this).attr("data-img-name");
        $("#preview_img").attr("left", pos_x);
        $("#preview_img").attr("top", pos_y);
        $("#p_img_src").attr("src", imgsrc);
        $("#preview_img").show();

        console.log("testing");

    });



    $("#btnAddVideo").click(function(){
        var $youtubeURL = $("#addInputYoutube").val();
        if (!validateYouTubeUrl($youtubeURL)) {
            $("#addYoutubeInputMsg").text('please, input validated youtube url.');
            return;
        } else {
            $("#addYoutubeInputMsg").text('');
        }

        $.post( "/start_project/add_project_info", $( "#frm_additional_video" ).serialize() ).done(function( data ) {
           var obj = JSON.parse(data);

            if (obj.result == "success") {
                getSortableArea();
            }
        });;


    });

    $("#btnAddDescp").click(function(){
        if ($("#input_meta_desc_title").val() == "") {
            $("#addDescInputMsg").text("please, Input additonal description title.");
            $("#input_meta_desc_title").addClass("red-border");
            return;
        } else {
            $("#addDescInputMsg").text("");
            $("#input_meta_desc_title").removeClass("red-border");
        }

        if ($("#input_meta_desc_content").val() == "") {
            $("#addDescInputMsg").text("please, Input additonal description content");
            $("#input_meta_desc_content").addClass("red-border");
            return;
        } else {
            $("#addDescInputMsg").text("");
            $("#input_meta_desc_content").removeClass("red-border");
        }

        $.post( "/start_project/add_project_info", $( "#frm_additional_description" ).serialize() ).done(function( data ) {
            var obj = $.parseJSON(data);

            if (obj.result == "success") {
                getSortableArea();
            }
        });;


    });

    getSortableArea();

    function getSortableArea() {
        var project_id = $("#sortable").attr("data-project-id");
        $( "#sortable" ).load( "/start_project/get_sortable_info/"+project_id );
    }

    $(".main_image_preview_x_BTN").click(function(){
        var project_id = $("#sortable").attr("data-project-id");
        var img_kind = $(this).attr("data-img-kind");
        var callURL = "/start_project/my_design_project_img_blank/"+project_id+"/"+img_kind;
        
        $.post(callURL, function (data) {
            // alert(data);
            var obj = $.parseJSON(data);
            if (obj.result == "success") {
                // $("#main_image_preview").hide();     
                var result_int = parseInt(obj.msg);
                console.log("ffff : "+result_int);
                if (obj.msg == 0) {
                    $("#main_image_preview").hide();     
                } else if (obj.msg == 1) {
                    $("#view_product_img").hide();
                } else if (obj.msg == 2) {
                    $("#view_product_img_sm").hide();
                } else if (obj.msg == 3 || obj.msg == 4) {
                    $("#view_product_img_left_right").hide();
                }
            }
        });

        // end ajax call
    });

    function validateYouTubeUrl($youtube_url)
    {
        var url = $youtube_url;
        if (url != undefined || url != '') {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    // Product image
    $(".check_product_img_kind").change(function(){
        var radioValue = $(this).val(); // 0,1 => 1移쇰읆, 2 => 2移쇰읆
        if (radioValue == 0) {
            $("#inputProductImage").show();
            $("#inputProductImage_sm").hide();            
            $("#inputProductImage_left").hide();
            $("#inputProductImage_right").hide();
        } else if (radioValue == 1) {
            $("#inputProductImage").hide();
            $("#inputProductImage_sm").show();
            $("#inputProductImage_left").hide();
            $("#inputProductImage_right").hide();
        } 
        else {
            $("#inputProductImage").hide();
            $("#inputProductImage_sm").hide();
            $("#inputProductImage_left").show();
            $("#inputProductImage_right").show();
        }
    });


    // select meta image upload type
    $(".check_meta_img_kind").change(function(){
        var radioValue = $(this).val(); // 0,1 => 1移쇰읆, 2 => 2移쇰읆
        if (radioValue == 0 || radioValue == 1 ) {
            $("#inputfile_add_image").show();
            $("#inputfile_add_image_left").hide();
            $("#inputfile_add_image_right").hide();
        } else {
            $("#inputfile_add_image").hide();
            $("#inputfile_add_image_left").show();
            $("#inputfile_add_image_right").show();
        }
    });


    $("#btnAddImagesNew").click(function(){
        // event.preventDefault();
        var nowUploadType = $(".check_meta_img_kind:checked").val();

        if (parseInt(nowUploadType) == 2) {
            // img_upload_left -- inputfile_add_image_left
            // img_upload_right -- inputfile_add_image_right

            if ($("#inputfile_add_image_left").val() == "") {
                $("#addfileinputMsg").text("Please, select left upload image.");
                return;
            } else if ($("#inputfile_add_image_right").val() == "") {
                $("#addfileinputMsg").text("Please, select right upload image.");
                return;
            } else {
                $("#addfileinputMsg").text("");
            }

        } else {
            if ($("#inputfile_add_image").val() == "") {
                $("#addfileinputMsg").text("Please, select upload image..");
                return;
            } else {
                $("#addfileinputMsg").text("");
            }
        }

        var data = new FormData();
        if (nowUploadType == 2) {
            data.append("img_upload_left", $('#inputfile_add_image_left').prop('files')[0]);
            data.append("img_upload_right", $('#inputfile_add_image_right').prop('files')[0]);
        } else {
            data.append("meta_content", $('#inputfile_add_image').prop('files')[0]);
        }

        data.append("meta_kind", $("#frm_ad_meta_kind").val());
        data.append("project_id", $("#frm_ad_project_id").val());
        data.append("meta_option", nowUploadType);


        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            url: "/start_project/add_project_info",
          data: data,
          cache: false,
          contentType: false,
          processData: false,
          success:  function(data){
            var obj = JSON.parse(data);
            // console.log(obj.result+"testing code");
            if (obj.result == "success") {
                getSortableArea();
            }
          }
      });

      return;
    });


}); // end page