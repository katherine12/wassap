document.getElementById("message").addEventListener("keypress", myFunction);

function myFunction() {
    document.getElementById("message");

    var textoValue = gettextoValue();
    if(event.keyCode==13) {
        doañadir(textoValue);
        clean();
    }
    
}
function obtenerMensaje(){
	var textarea = document.getElementById("message");
	return textarea.value;
}

function crearDiv(mensaje){
	var div = document.createElement("div");
	div.className = "mensaje";
	div.innerHTML = "<p class='texto'>"+mensaje+"</p>";
	return div;
}

function limpiarTextarea(){
	var textarea = document.getElementById("request");
	textarea.value = "";
}
function sendMensaje(){
	var mensaje = obtenerMensaje();
	if(mensaje !==""){
		crearDiv(mensaje);
		clean();
	}
	var div = crearDiv(mensaje);
	var contenedor = document.getElementById("request");
	contenedor.appendChild(div);
	limpiarTextarea();
}


function clean(){
	var textarea = document.getElementById("message");
	textarea.value = "";
	textarea.focus(); 
}

function eliminarDiv(elemento){
	var div = elemento.parentElement;
	div.remove();
}
/* filtrador....*/
$(document).ready(function() {

  var jobCount = $('#listas .in').length;
  $('.lists-count').text(jobCount + ' items');
    
  
  $("#search-text").keyup(function () {
  
    var searchTerm = $("#search-text").val();
    var listItem = $('#listas').children('li');
  
    
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
    
    
    $("#listas li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).addClass('hiding out').removeClass('in');
      setTimeout(function() {
          $('.out').addClass('hidden');
        }, 300);
    });
    
    $("#listas li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).removeClass('hidden out').addClass('chat');
      setTimeout(function() {
          $('.chat').removeClass('hiding');
        }, 1);
    });
    
  
      var jobCount = $('#listas .chat').length;
    $('.list-count').text(jobCount + ' items');
    
    if(jobCount == '0') {
      $('#listas').addClass('empty');
    }
    else {
      $('#listas').removeClass('empty');
    }
    
  });
});