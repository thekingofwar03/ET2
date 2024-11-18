class analysis_preparation extends EntidadAbstracta {

	constructor() {

		super();
		this.columnasamostrar = Array();
		this.entidad = 'analysis_preparation';

		this.inicializar();


	}

	cargar_formulario_html() {
		this.accion = '';
		let formulario = `
			<label id="label_id_analysis_preparation" class="label_id_analysis_preparation" >id_analysis_preparation</label>
			<input type='text' id='id_analysis_preparation' name='id_analysis_preparation' ></input>
			<span id="div_error_id_analysis_preparation"><a id="error_id_analysis_preparation"></a></span>
			<br>

			<label id="label_name_analysis_preparation" class="label_name_analysis_preparation" >name_analysis_preparation</label>
			<input type='text' id='name_analysis_preparation' name='name_analysis_preparation'></input>
			<span id="div_error_name_analysis_preparation"><a id="error_name_analysis_preparation"></a></span>
			<br>

			<label id="label_description_analysis_preparation" class="label_description_analysis_preparation" >description_analysis_preparation</label>
			<input type='text' id='description_analysis_preparation' name='description_analysis_preparation'></input>
			<span id="div_error_description_analysis_preparation"><a id="error_description_analysis_preparation"></a></span>
			<br>

			<label id="label_bib_analysis_preparation" class="label_bib_analysis_preparation" for="bib_analysis_preparation">bib_analysis_preparation</label>
			<input type='text' id='bib_analysis_preparation' name='bib_analysis_preparation' ></input>
			<span id="div_error_bib_analysis_preparation"><a id="error_bib_analysis_preparation"></a></span>
			<br>

			<br>
			<label id="label_file_analysis_preparation" class="label_file_analysis_preparation" >file_analysis_preparation</label>
			<input type='text' id='file_analysis_preparation' name='file_analysis_preparation' ></input>
			<span id="div_error_file_analysis_preparation"><a id="error_file_analysis_preparation"></a></span>			
			<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/"><img src="./iconos/FILE.png" /></a>
			<label id="label_nuevo_file_analysis_preparation" class="label_nuevo_file_analysis_preparation" >Nueva file_analysis_preparation</label>
			<input type='file' id='nuevo_file_analysis_preparation' name='nuevo_file_analysis_preparation'></input>
			<span id="div_error_nuevo_file_analysis_preparation"><a id="error_nuevo_file_analysis_preparation"></a></span>
			<br>
			`;
		document.getElementById("IU_form").innerHTML = formulario;
	}
	createForm_ADD() {
		//crea el formulario limpio
		if (eval(this.cargar_formulario_html)) {
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'ADD';
		}
		document.getElementById("class_contenido_titulo_form").className = 'text_contenido_titulo_form_' + this.entidad + '_ADD';

		//eliminar los campos innecesarios
		document.getElementById("label_file_analysis_preparation").remove();
		document.getElementById("file_analysis_preparation").remove();
		document.getElementById("link_file_analysis_preparation").remove();

		document.getElementById("label_id_analysis_preparation").remove();
		document.getElementById("id_analysis_preparation").remove();

		this.colocarvalidaciones("ADD");
		this.colocarboton("ADD");
		document.getElementById('IU_form').setAttribute("onsubmit", "return validar.comprobar_submit");
		document.getElementById('IU_form').setAttribute("action", "javascript:validarADD();");
		document.getElementById("div_IU_form").style.display = 'block';
	}
		createForm_SEARCH(parametros){
			if(eval(this.cargar_formulario_html)) this.cargar_formulario_html;//formulario limpio
			document.getElementById("class_contenido_titulo_form").className='text_contenido_titulo_form_' + this.entidad + '_SEARCH';//titulo
			document.getElementById("label_nuevo_file_analysis_preparation").remove();
			document.getElementById("nuevo_file_analysis_preparation").remove();
			document.getElementById("link_nuevo_file_anlysis_preparation");
			this.colocarvalidaciones('SEARCH');
			this.colocarboton('SEARCH');
			document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit_SEARCH();");
			document.getElementById("IU_form").setAttribute('action', "javascript:validar.SEARCH();");
		
			document.getElementById("div_IU_form").style.display = 'block';
			setLang();

		}
		createForm_EDIT(parametros){
			if(eval(this.cargar_formulario_html)){
				this.cargar_formulario_html;
				this.accion='EDIT';
		}
	}

	colocarboton(accion) {
		//crea un div y lo apend al formulario
		let dboton = document.createElement('div');
		dboton.id = 'div_boton';
		document.getElementById('IU_form').append(dboton);
		//crea el boton como tipo submit
		let botonsub = document.createElement("boton");
		botonsub.id = "submit_boton";
		botonsub.type = "submit";
		//crea la imagen del boton
		let imagen = document.createElement("imagen");
		imagen.src = './iconos/' + accion + '.png';
		botonsub.append(imagen);
		document.getElementById('div_boton').append(botonsub);
	}
	colocarvalidaciones(accion){
		let evento;
		let camps=document.forms['IU_forms'].elements;
		for(let i =0;i < camps.length; i++){
			if ((document.getElementById(campos[i].id).tagName == 'INPUT') && (document.getElementById(campos[i].id).type !== 'file')) {
				evento = 'onblur';
			}else{
				evento='onchange';
			}
			if (accion=='SEARCH'){
				document.getElementById(camps[i].id).setAttribute(evento, 'validar.comprobar_'+camps[i].id+'_'+accion+'.();');
			}else{
				document.getElementById(camps[i].id).setAttribute(evento, 'validar.comprobar_'+accion+'.();');
			}

		}
	}




}