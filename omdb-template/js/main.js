/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const divContent = document.getElementById('content');
const ul = document.getElementById('movielist');

input.addEventListener('input', async function() {
    try {
        const response = await fetch('http://www.omdbapi.com/?apikey=7350108b&s=' + input.value);
        const movies = await response.json()
        const searchResults = movies.Search;
        console.log(searchResults);


        divContent.innerHTML = "";

        for (let movie of searchResults){
            divContent.innerHTML += `<ul>
            
                <li>${movie.Title}</li>
                <li>${movie.Year}</li>
                <li>${movie.imdbID}</li>
                <li>${movie.Type}</li>
                <img src = ${movie.Poster}>
                
                
                
            
            </ul>`
            
        }

        }catch (error){
            console.log(error)

        }

        })




    





        /*
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.text();

        console.log(data);
        document.getElementById('text').innerHTML = data;
    } catch (error) {
       // console.log(error)
       
    }
})*/
