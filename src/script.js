const gantiTampilan = () => {
    const change = document.getElementById('change').value;
    if(change < 0 || change > 3){
        alert('Input tidak valid');
        return ;
    }
    switch(change){
        case '1' : tampilan1() ; break;
        case '2' : tampilan2() ; break;
        case '3' : tampilan3() ; break;
    }
}

const btn = document.getElementById('button')
btn.addEventListener("click", gantiTampilan())


/**
 * Awal Tampilan 1 dan script 
 */
const tampilan1 = () => {
    document.getElementById('tampilan').innerHTML = `
        <div>
            <table>
                <tr>
                    <td class="table">
                        <h1>Nilai 1</h1>
                    </td>
                    <td></td>
                    <td class="table">
                        <h1>Nilai 2</h1>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" id="value1">
                    </td>
                    <td>
                        <select id="operator">
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                            <option value="^">^</option>
                        </select>
                    </td>
                    <td>
                        <input type="number" id="value2">
                    </td>
                    <td>
                        <button type="submit" onclick="kalkulatorSederhana()">Submit</button>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" class="table">
                        <h2>Hasil</h2>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" class="table">
                        <h2 id="hasil"></h2>
                    </td>
                </tr>
            </table>
        </div>`
}

const kalkulatorSederhana = () => {

    let getOperator = () => document.getElementById('operator').value
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    let hasil;

    switch(getOperator()){
        case '+' : hasil =  value1 + value2 ; break;
        case '-' : hasil =  value1 - value2 ; break;
        case '*' : hasil =  value1 * value2 ; break;
        case '/' : hasil =  value1 / value2 ; break;
        case '^' : hasil =  Math.pow(value1, value2) ; break;
        default : null
    }   

    isNaN(hasil) ? alert('value tidak valid') : document.getElementById('hasil').innerHTML = hasil;
}
/**
 * Akhir tampilan 1 dan script
 */


/**
* Awal Tampilan 2 dan script
*/

const tampilan2 = () => {
    document.getElementById('tampilan').innerHTML = `
    <div>
        <table>
            <tr>
                <td><h3>Input</h3></td>
            </tr>
            <tr>
                <td><P>Nama</P></td>
                <td><p>:</p></td>
                <td><input type="text" id="nama"></td>
            </tr>
            <tr>
                <td><P>Jumlah Kehadiran</P></td>
                <td><p>:</p></td>
                <td><input type="number" id="jmlKehadiran"></td>
            </tr>
            <tr>
                <td><P>Nilai Tugas</P></td>
                <td><p>:</p></td>
                <td><input type="number" id="tugas"></td>
            </tr>
            <tr>
                <td><P>Nilai UTS</P></td>
                <td><p>:</p></td>
                <td><input type="number" id="uts"></td>
            </tr>
            <tr>
                <td><P>Nilai UAS</P></td>
                <td><p>:</p></td>
                <td><input type="number=" id="uas"></td>
            </tr>
            <tr>
                <td colspan="3"><button onclick="hitungKelulusan()">Hitung</button></td>
            </tr>
        </table>
        <table>
            <tr>
                <td><p>Nama</p></td>
                <td><p>:</p></td>
                <td><p id="hNama">.........</p></td>
            </tr>
            <tr>
                <td><p>Nilai Tugas</p></td>
                <td><p>:</p></td>
                <td><p id="hTugas">.........</p></td>
            </tr>
            <tr>
                <td><p>Nilai UAS</p></td>
                <td><p>:</p></td>
                <td><p id="hUas">.........</p></td>
            </tr>
            <tr>
                <td><p>Grade</p></td>
                <td><p>:</p></td>
                <td><p id="hGrade">.........</p></td>
            </tr>
            <tr>
                <td><p>Nilai Kehadiran</p></td>
                <td><p>:</p></td>
                <td><p id="hKehadiran">.........</p></td>
            </tr>
            <tr>
                <td><p>Nilai UTS</p></td>
                <td><p>:</p></td>
                <td><p id="hUts">.........</p></td>
            </tr>
            <tr>
                <td><p>Nilai Akhir</p></td>
                <td><p>:</p></td>
                <td><p id="hNilaiAkhir">.........</p></td>
            </tr>
            <tr>
                <td><p>Keterangan</p></td>
                <td><p>:</p></td>
                <td><p id="hKeterangan">.........</p></td>
            </tr>
        </table>
    </div>`
}

const hitungKelulusan = () => {
    const nama = document.getElementById('nama').value;
    const jmlKehadiran = document.getElementById('jmlKehadiran').value;
    const tugas = parseFloat(document.getElementById('tugas').value);
    const uts = parseFloat(document.getElementById('uts').value);
    const uas = parseFloat(document.getElementById('uas').value);
    let grade, ket;
    const nilaiAkhir = (uas * 40/100) + (uts * 30/100) + (tugas * 20/100) + (jmlKehadiran * 10/100);

    if(jmlKehadiran > 18 || jmlKehadiran < 0 ){ 
        alert("Jumlah Kehadiran tidak valid") 
        return ; 
    }

    if(tugas > 100 || tugas < 0 || uts > 100 || uts < 0 || uas > 100 || uas < 0){
        alert("Input UAS/UTS/TUGAS tidak valid") 
        return ;
    }

    nilaiAkhir >= 70 ? ket = 'LULUS' : ket = 'TIDAK LULUS'
    
    if(nilaiAkhir >= 85){
        grade = 'A';
    }else if(nilaiAkhir >= 75){
        grade = 'B';
    }else if(nilaiAkhir >= 65){
        grade = 'C';
    }else if(nilaiAkhir >= 55){
        grade = 'D'
    }else{
        grade = 'E'
    }
    
    document.getElementById('hNama').innerHTML = nama;
    document.getElementById('hTugas').innerHTML = tugas;
    document.getElementById('hUas').innerHTML = uas;
    document.getElementById('hGrade').innerHTML = grade;
    document.getElementById('hKehadiran').innerHTML = jmlKehadiran;
    document.getElementById('hUts').innerHTML = uts;
    document.getElementById('hNilaiAkhir').innerHTML = nilaiAkhir;
    document.getElementById('hKeterangan').innerHTML = ket;

}

/**
 * Akhir Tampilan 2 dan Script
 */


 /**
  * Awal Tampilan 3 dan Script
  */

const tampilan3 = () => {
    document.getElementById('tampilan').innerHTML = `
        <div>
            <table>
                <tr>
                    <td>
                        <h2>Input</h2>
                    </td>

                </tr>
                <tr>
                    <td>
                        <p>Derajat Fahrenheit</p>
                    </td>
                    <td>
                        <input type="number" id="submitF" >
                    </td>
                    <td>
                        <button type="submit" onclick="konversiSuhu()">Hitung</button>
                    </td>
                </tr>
            </table><table>
                <tr>
                    <td>
                        <h2>Output</h2>
                    </td>

                </tr>
                <tr>
                    <td>
                        <p>Derajat Fahrenheit</p>
                    </td>
                    <td><p>:</p></td>
                    <td>
                        <p id="F">.........</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Derajat Celcius</p>
                    </td>
                    <td><p>:</p></td>
                    <td>
                        <p id="C">.........</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Derajat Reamur</p>
                    </td>
                    <td><p>:</p></td>
                    <td>
                        <p id="R">.........</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Derajat Kelvin</p>
                    </td>
                    <td><p>:</p></td>
                    <td>
                        <p id="K">.........</p>
                    </td>
                </tr>
            </table>
        </div>
    `
}

const konversiSuhu = () => {
    const fahrenheit = parseFloat(document.getElementById('submitF').value);
    // console.log(fahrenheit)
    const celcius = 5/9 * (fahrenheit - 32);
    const kelvin =  (fahrenheit - 32 ) * 5/9 + 273.15 
    const reamur = 4/9 * (fahrenheit - 32)

    document.getElementById('F').innerHTML = fahrenheit;
    document.getElementById('C').innerHTML = celcius;
    document.getElementById('R').innerHTML = reamur;
    document.getElementById('K').innerHTML = kelvin;

}

/**
 * Akhir tampilan 3 dan script
 */