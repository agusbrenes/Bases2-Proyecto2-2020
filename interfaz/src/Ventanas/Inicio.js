import React, {Component} from "react";
import "./Styles.css"
import axios from "axios";
import swal from "sweetalert";

class Inicio extends Component {
    state = {
        string: "",
        keywords: []
    }

    //Cambia los valores de los estados
    handleChange = ({target}) => {
        const { name, value } = target;
        
        this.setState({
          [name]:value
        });
    };

    getKeywords = (string) => {
        var words = string.split(" ");
        var keywords = [];
        var blackList = ["a", "ante", "bajo", "cabe", "con", "contra", "de", "desde", "en", "entre", "hacia", "hasta", "mediante", "para", "por", "según", "sin", "so", "sobre", "tras", "versus", "vía",
        "y", "e", "ni", "que", "o", "u", "es", "ya",
        "el", "los", "la", "las", "un", "unos", "una", "unas", "lo",
        "ellos", "ellas", "ello", "ella", "él",
        "\n"];
        words.forEach( (word) => {
            if (!blackList.includes(word)) {
                keywords.push(word);
            }
        });
        return keywords
    }

    buscar = (event) => {
        event.preventDefault();
        var str = this.state.string;
        console.log(str);
        var wrds = this.getKeywords(str);
        this.state.keywords = wrds;
        console.log(this.state.keywords);
        const Search = {
            string: this.state.string,
            keywords: this.state.keywords
        }
        var searchUrl = "/api/Buscar/";
        this.state.keywords.forEach( (word) => {
            searchUrl = searchUrl + word + "+";
        });

        searchUrl = searchUrl.slice(0,searchUrl.length-1);
        console.log(searchUrl);
        console.log(this.state.keywords);
        /*axios({
            url: searchUrl,
            method: "PUT",
            data: Search
        })
        .then(() => {
            swal({
                text: "Sede " + this.state.name + " modificada con exito",
                icon: "success",
                button: "Continuar"
            })
            .then(respuesta => {
                if (respuesta) {
                    this.props.history.push("/Sedes/VerSedes");
                }
            })
        })
        .catch(() => {
            swal({
                text: "Búsqueda " + this.state.string + " no tuvo éxito, ¿desea volver a realizar la búsqueda?",
                icon: "error",
                buttons: ["No", "Si"]
            })
            .then(respuesta => {
                if (!respuesta) {
                    //this.props.history.push("/Buscar");
                }
            })
        })*/
    };
    
    render(){
        return (
            <div>
                <p className= "titulo">
                    Buscador Web                
                </p>
                <form className = "card-body justify-content-center align-items-center" onSubmit = {this.buscar}>
                    <div className="form-group">
                        <div className = "col-xs-4">
                            <input
                                type="text"
                                name="string"
                                className="form-control"
                                value={this.state.string}
                                onChange={this.handleChange}
                                placeholder={this.state.string}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-dark btn-lg button"> Buscar </button>
                </form>                
            </div>
        )
    }
}

export default Inicio;