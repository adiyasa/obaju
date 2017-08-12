var productShown;
var index = 0;
var limit;
function indexChange(){
	$( document ).ready(function() {
	    $.ajax({
	        type: "GET",
	        url: 'xml/data.xml',
	        dataType: "xml",
	        success: function (xml) { myFunction(xml); }
	    });
	});
}

function myFunction(data){
	console.log('infunction');
	var product = $(data).find('PRODUCT')
	//$("#image1"+"1").attr('src', $(product[0]).find("IMAGE").text()+'.jpeg');
	for(count = 0; count < 8; count++){
		document.getElementsByClassName("price")[count].innerHTML = "$"+ $(product[count]).find("PRICE").text();
		$("#image"+count.toString()+"1").attr('src', $(product[count]).find("IMAGE").text()+".jpeg");
		$("#image"+count.toString()+"2").attr('src', $(product[count]).find("IMAGE2").text()+".jpeg");
		$("#image"+count.toString()+"2").attr('src', $(product[count]).find("IMAGE2").text()+".jpeg");
		document.getElementsByClassName("textproduct")[count].innerHTML = 	$(product[count]).find("NAME").text()
	}
}
function womanXmlFilter(type,brand){
	$( document ).ready(function() {
	    $.ajax({
	        type: "GET",
	        url: 'xml/dataFemale.xml',
	        dataType: "xml",
	        success: function (xml) { filterMen(xml,type,brand); }
	    });
	});
}
function manXmlFilter(type,brand){
	$( document ).ready(function() {
	    $.ajax({
	        type: "GET",
	        url: 'xml/data.xml',
	        dataType: "xml",
	        success: function (xml) { filterMen(xml,type,brand); }
	    });
	});
}
function filterMen(data,type,brand){
	var product = $(data).find('PRODUCT')
	var filter =[]
	product.each(function(){
		if ($(this).parent().attr('type') == type){
			
			filter.push(this)
		}
	})
	$("#rows").empty()
	if(type == null){
		filter = product
	}
	if(brand != null){
		filter = []
		if ($(this).parent().attr('brand') == brand){
			filter.push(this);
		}

	}
	productShown = filter;
	showProduct();
	console.log (productShown)
	bubblesort(productShown);
	document.getElementById("showText").innerHTML = "Showing <strong>"+productShown.length+"</strong> of <strong>"+productShown.length+"</strong> products";

}
$( document ).ready(function() {
	$("#sort").change(function(){
	    bubblesort(productShown)
	});
	

})
function bubblesort(data){
	var swapped;
	console.log($('#sort').val())
	if($('#sort').val()=="Price: low-high"){
		do {
	        swapped = false;
	        for (var i=0; i < data.length-1; i++) {
	        	var a = parseInt($(data[i]).find("PRICE").text())
	        	var b = parseInt($(data[i+1]).find("PRICE").text())
	            if (a > b) {
	                var temp = productShown[i];
	                data[i] = productShown[i+1];
	                data[i+1] = temp;
	                swapped = true;
	            }
	        }
	    } while (swapped);
	}
	else {
		do {
	        swapped = false;
	        for (var i=0; i < data.length-1; i++) {
	        	var a = parseInt($(data[i]).find("PRICE").text())
	        	var b = parseInt($(data[i+1]).find("PRICE").text())
	            if (a < b) {
	                var temp = productShown[i];
	                data[i] = productShown[i+1];
	                data[i+1] = temp;
	                swapped = true;
	            }
	        }
	    } while (swapped);
	}
    
    console.log(data)
    filter = data
    $("#rows").empty()
    for(i=0;i<filter.length;i++){
		var string = '<div class="col-md-4 col-sm-6"><div class="product">                                <div class="flip-container">                                    <div class="flipper">                                        <div class="front">                                            <a href="detail.html">                                                <img src='+$(filter[i]).find("IMAGE").text()+".jpeg"+' alt="" class="img-responsive" id = "asd">                                            </a>                                        </div>                                        <div class="back">`                                            <a href="detail.html">                                                <img src="'+$(filter[i]).find("IMAGE2").text()+".jpeg"+'" alt="" class="img-responsive">                                            </a>                                        </div>                                    </div>                                </div>                               <a href="detail.html" class="invisible">                                   <img src="img/product1.jpg" alt="" class="img-responsive">                              </a>                             <div class="text">                                  <h3><a href="detail.html">'+$(filter[i]).find("NAME").text()+'</a></h3>                                  <p class="price">$'+$(filter[i]).find("PRICE").text()+'</p>                                    <p class="buttons">                                     <a href="detail.html" class="btn btn-default">View detail</a>                                     <a href="basket.html" class="btn btn-primary"><i class="fa fa-shopping-cart"></i>Add to cart</a>                                </p>                               </div>                                <!-- /.text -->                            </div>                            <!-- /.product -->                        </div>'

		$("#rows").append(string);
	}
	productShown = filter
}
function showProduct(limiter){


	filter = productShown
	
	document.getElementById("showText").innerHTML = "Showing <strong>"+limiter+"</strong> of <strong>"+productShown.length+"</strong> products";

    $("#rows").empty()
	for (var i=0; i<limiter;i++){
		var string = '<div class="col-md-4 col-sm-6"><div class="product">                                <div class="flip-container">                                    <div class="flipper">                                        <div class="front">                                            <a href="detail.html">                                                <img src='+$(filter[i]).find("IMAGE").text()+".jpeg"+' alt="" class="img-responsive" id = "asd">                                            </a>                                        </div>                                        <div class="back">`                                            <a href="detail.html">                                                <img src="'+$(filter[i]).find("IMAGE2").text()+".jpeg"+'" alt="" class="img-responsive">                                            </a>                                        </div>                                    </div>                                </div>                               <a href="detail.html" class="invisible">                                   <img src="img/product1.jpg" alt="" class="img-responsive">                              </a>                             <div class="text">                                  <h3><a href="detail.html">'+$(filter[i]).find("NAME").text()+'</a></h3>                                  <p class="price">$'+$(filter[i]).find("PRICE").text()+'</p>                                    <p class="buttons">                                     <a href="detail.html" class="btn btn-default">View detail</a>                                     <a href="basket.html" class="btn btn-primary"><i class="fa fa-shopping-cart"></i>Add to cart</a>                                </p>                               </div>                                <!-- /.text -->                            </div>                            <!-- /.product -->                        </div>'

		$("#rows").append(string);
	}
	limit = limiter
	index = limiter-1;
	var page = $(".pagination")
	page.empty()
	var goPrev = '<li><a href="#">&laquo;</a></li>'
	page.append(goPrev);
	for (var i=0; i<Math.ceil(productShown.length/limiter);i++){
		var string = '<li><onclick="showProduct()">'+(i+1).toString()+'</a></li>'
		page.append(string)
	}
	var goNext = '<li><a href="#">&raquo;</a></li>'
	page.append(goNext)

	

}
function goNextPage(){}
function changeClass(chage){
	$(".btn.btn-default.btn-primary").attr('class', 'btn btn-default btn-sm');
	$(chage).attr("class",'btn btn-default btn-primary')
}
function filterBrand(){
	//console.log("asdas")
	var filterString ="";
	$('.check').each(function(){
		//console.log($(this).text())
		if($(this).prop( "checked", true )){
			filterString += $(this).text()
		}
	})
	console.log(filterString)

}
