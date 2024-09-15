const botaoHemograma = document.getElementById('btn-hemograma')
const botaoLeucograma = document.getElementById('btn-leucograma')
const botaoPlaqueta = document.getElementById('btn-plaq')


    function hemograma(){
    const res = document.getElementById('res-hemo');

    const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    const sexo = sexoSelecionado ? sexoSelecionado.value : null;

    /* let sexo;
if (sexoSelecionado) {
  sexo = sexoSelecionado.value;
} else {
  sexo = null;
}
 */

    //inputs hemograma
    const hemaciaTotal = document.getElementById('rbc').value 
    const hemacia = Number(hemaciaTotal);

    const hbTotal = document.getElementById('hb').value
    const hb = Number(hbTotal);

    const htTotal = document.getElementById('ht').value
    const ht = Number(htTotal);

    const vcmTotal = document.getElementById('vcm').value
    const vcm = Number(vcmTotal);

    const chcmTotal = document.getElementById('chcm').value
    const chcm = Number(chcmTotal);

    const rdwTotal = document.getElementById('rdw').value
    const rdw = Number(rdwTotal);

    if (hemacia === 0 || hb === 0 || ht === 0 || vcm === 0 || chcm === 0 || rdw === 0){
        alert('Preencha os campos para prosseguir.')
    } else {
        switch (sexo){
            case 'homem':
                if (hemacia < 4.5){
                    res.innerHTML = 'As <strong>hemácias</strong> estão abaixo do valor de referência.'
                } else if (hemacia > 5.9){
                    res.innerHTML = 'As <strong>hemácias</strong> estão acima do valor de referência.'
                } else {
                    res.innerHTML = 'As <strong>hemácias</strong> estão dentro do valor de referência.'
                }

                if (hb < 13.5){
                    res.innerHTML += '<br> A <strong>hemoblogina</strong> está abaixo do valor de referência.'
                } else if (hb > 16.5){
                    res.innerHTML += '<br> A <strong>hemoblogina</strong> está acima do valor de referência.'
                } else {
                    res.innerHTML += '<br> A <strong>hemoblogina</strong> está dentro do valor de referência.'
                }

                if (ht > 40){
                    res.innerHTML += '<br> O <strong>hematócrito</strong> está abaixo do valor de referência.'
                } else if (ht > 50){
                    res.innerHTML += '<br> O <strong>hematócrito</strong> está acima do valor de referência.'
                } else {
                    res.innerHTML += '<br> O <strong>hematócrito</strong> está dentro do valor de referência.'
                }

                if (vcm > 90){
                    res.innerHTML += '<br> O <strong>VCM</strong> está acima do valor de referência.'
                } else if (vcm < 80){
                    res.innerHTML += '<br> O <strong>VCM</strong> está abaixo do valor de referência.'
                } else {
                    res.innerHTML += '<br> O <strong>VCM</strong> está dentro do valor de referência.'
                }

                if (chcm > 36){
                    res.innerHTML += '<br> O <strong>CHCM</strong> está acima do valor de referência.'
                } else if (chcm < 31){
                    res.innerHTML += '<br> O <strong>CHCM</strong> está abaixo do valor de referência.'
                } else {
                    res.innerHTML += '<br> O <strong>CHCM</strong> está dentro do valor de referência.'
                }

                if (rdw > 14){
                    res.innerHTML += '<br> O <strong>RDW</strong> está acima do valor de referência.'
                } else if (rdw < 11){
                    res.innerHTML += '<br> O <strong>RDW</strong> está abaixo do valor de referência.'
                } else {
                    res.innerHTML =+ '<br> O <strong>RDW</strong> está dentro do valor de referência.'
                }

            case 'mulher':
                if (hemacia < 3.9){
                    res.innerHTML = 'As <strong>hemácias</strong> estão abaixo do valor de referência.'
                } else if (hemacia > 5.3){
                    res.innerHTML = 'As <strong>hemácias</strong> estão acima do valor de referência.'
                } else {
                    res.innerHTML = 'As <strong>hemácias</strong> estão dentro do valor de referência.'
                }

                if (hb < 12){
                    res.innerHTML += '<br> A <strong>hemoblogina</strong> está abaixo do valor de referência.'
                } else if (hb > 16){
                    res.innerHTML += '<br> A <strong>hemoblogina</strong> está acima do valor de referência.'
                } else {
                    res.innerHTML += '<br> A <strong>hemoblogina</strong> está dentro do valor de referência.'
                }

                if (ht > 40){
                    res.innerHTML += '<br> O <strong>hematócrito</strong> está abaixo do valor de referência.'
                } else if (ht > 50){
                    res.innerHTML += '<br> O <strong>hematócrito</strong> está acima do valor de referência.'
                } else {
                    res.innerHTML += '<br> O <strong>hematócrito</strong> está dentro do valor de referência.'
                }

                if (vcm > 90){
                    res.innerHTML += '<br> O <strong>VCM</strong> está acima do valor de referência.'
                } else if (vcm < 80){
                    res.innerHTML += '<br> O <strong>VCM</strong> está abaixo do valor de referência.'
                } else {
                    res.innerHTML += '<br> O <strong>VCM</strong> está dentro do valor de referência.'
                }

                if (chcm > 36){
                    res.innerHTML += '<br> O <strong>CHCM</strong> está acima do valor de referência.'
                } else if (chcm < 31){
                    res.innerHTML += '<br> O <strong>CHCM</strong> está abaixo do valor de referência.'
                } else {
                    res.innerHTML += '<br> O <strong>CHCM</strong> está dentro do valor de referência.'
                }

                
                if (rdw > 14){
                    res.innerHTML += '<br> O <strong>RDW</strong> está acima do valor de referência.'
                } else if (rdw < 11){
                    res.innerHTML += '<br> O <strong>RDW</strong> está abaixo do valor de referência.'
                } else {
                    res.innerHTML =+ '<br> O <strong>RDW</strong> está dentro do valor de referência.'
                }

        }
    }}




    function leucograma(){
        const res = document.getElementById('res-leuco')

        //inputs leucograma

        const leucoTotal = document.getElementById('leuco').value
        const leuco = Number(leucoTotal);

        const basoTotal = document.getElementById('baso').value
        const baso = Number(basoTotal);

        const eosinoTotal = document.getElementById('eosino').value
        const eosino = Number(eosinoTotal);

        const mieloTotal = document.getElementById('mielo').value
        const mielo = Number(mieloTotal);

        const metaTotal = document.getElementById('metam').value
        const metam = Number(metaTotal);

        const bastTotal = document.getElementById('bast').value
        const bast = Number(bastTotal);

        const linfoTotal = document.getElementById('linfo').value
        const linfo = Number(linfoTotal);

        const latipTotal = document.getElementById('latip').value
        const latip = Number(latipTotal);

        const monoTotal = document.getElementById('mono').value
        const mono = Number(monoTotal);

        if (leucoTotal == "" || basoTotal == "" || eosinoTotal == "" || mieloTotal == "" || metaTotal == "" || bastTotal == "" || linfoTotal == "" || latipTotal == "" || monoTotal == ""){
            alert('Preencha todos os campos para prosseguir.')
        } else {

            switch(true){
                case (leuco > 10000): {
                    res.innerHTML = 'Os <strong>leucócitos</strong> estão acima do valor de referência.'
                }
                break;
                case (leuco < 3500): {
                    res.innerHTML = 'Os <strong>leucócitos</strong> estão abaixo do valor de referência.'
                }
                break;
                default:
                    res.innerHTML = 'Os <strong>leucócitos</strong> estão dentro do valor de referência.'
            }

            switch(true){
                case (baso > 2.5): {
                    res.innerHTML += '<br> Os <strong>básofilos</strong> estão acima do valor de referência.'
                }
                break;
                default:
                    res.innerHTML += '<br> Os <strong>básofilos</strong> estão dentro do valor de referência.'
            }

            switch(true){
                case(eosino > 50): {
                    res.innerHTML += '<br> Os <strong>esofinófilos</strong> estão acima do valor de referência.'
                }
                break;
                default:
                    res.innerHTML += '<br> Os <strong>eosinófilos</strong> estão dentro do valor de referência.'
            }

            switch(true){
                case (mielo > 0): {
                    res.innerHTML += '<br> Os <strong>mielócitos</strong> estão acima do valor de referência.'
                }
                break;
                default: {
                    res.innerHTML += '<br> Os <strong>mielócitos</strong> estão dentro do valor de referência.'
                }
            }

            switch(true){
                case(metam > 0): {
                    res.innerHTML += '<br> Os <strong>metamielócitos</strong> estão acima do valor de referência.'
                }
                break;
                default: {
                    res.innerHTML += '<br> Os <strong>metamielócitos</strong> estão dentro do valor de referência.'
                }
            }

            switch(true){
                case (bast > 800): {
                    res.innerHTML += '<br> Os <strong>bastões</strong> estão dentro do valor de referência.'
                }
                break;
                default: {
                    res.innerHTML += '<br> Os <strong>bastões</strong> estão dentro do valor de referência.'
                }
            }

            switch(true){
                case (linfo > 4800): {
                    res.innerHTML += '<br> Os <strong>linfócitos</strong> estão acima do valor de referência.'
                }
                break;
                case (linfo < 1000): {
                    res.innerHTML += '<br> Os <strong>linfócitos</strong> estão abaixo do valor de referência.'
                }
                break;
                default: {
                    res.innerHTML += '<br> Os <strong>linfócitos</strong> estão dentro do valor de referência.'
                }
            }

            switch(true){
                case (latip > 0): {
                    res.innerHTML += '<br> Os <strong>linfócitos atípicos</strong> estão dentro do valor de referência.'
                }
                break;
                default: {
                    res.innerHTML += '<br> Os <strong>linfócitos atípicos</strong> estão dentro do valor de referência.'
                }
            }

            switch(true){
                case (mono > 1000): {
                    res.innerHTML += '<br> Os <strong>monócitos</strong> estão dentro do valor de referência.'
                }
                break;
                case (mono <  200): {
                    res.innerHTML += '<br> Os <strong>monócitos</strong> estão abaixo do valor de referência.'
                }
                break;
                default: {
                    res.innerHTML += '<br> Os <strong>monócitos</strong> estão dentro do valor de referência.'
                }
            }


        }


    }

    

    function plaquetas(){
        const res = document.getElementById('res-plaq');

        const plaqTotal = document.getElementById('plaq').value
        const plaq = Number(plaqTotal);

        const vpmTotal = document.getElementById('vpm').value
        const vpm = Number(vpmTotal);

        const plaqueTotal = document.getElementById('plaqueto').value
        const plaqueto = Number(plaqueTotal);

        const pdwTotal = document.getElementById('pdw').value
        const pdw = Number(pdwTotal);

        if (plaq === 0 || vpm === 0 || plaqueto === 0 || pdw === 0){
            alert('Preencha os campos para prosseguir.')
        } else{
            switch(true){
                case (plaq < 150): {
                    res.innerHTML = 'As <strong>plaquetas</strong> estão abaixo do valor de referência.'
                }
                break;
                case (plaq > 450): {
                    res.innerHTML = 'As <strong>plaquetas</strong> estão acima do valor de referência.'
                }
                break;
                default:
                    res.innerHTML = 'As <strong>plaquetas</strong> estão dentro do valor de referência.'
            }

            switch(true){
                case(vpm > 12.5): {
                    res.innerHTML += '<br>O <strong>VPM</strong> está acima do valor de referência.'
                }
                break;
                case (vpm < 9.5): {
                    res.innerHTML += '<br> O <strong>VPM</strong> está abaixo do valor de referência.'
                }
                break;
                default:
                    res.innerHTML += '<br> O <strong>VPM</strong> está dentro do valor de referência.'
            }

            switch(true){
                case (plaqueto > 0.4): {
                    res.innerHTML += '<br> O <strong>plaquetócrito</strong> está acima do valor de referência.'
                }
                break;
                case (plaqueto < 0.15): {
                    res.innerHTML += '<br> O <strong>plaquetócrito</strong> está acima do valor de referência.'
                }
                break;
                default:
                    res.innerHTML += '<br> O <strong>plaquetócrito</strong> está acima do valor de referência.'
            }

            switch(true) {
                case (pdw > 18): {
                    res.innerHTML += '<br> O <strong>PDW</strong> está acima do valor de referência.'
                }
                break;
                case (pdw < 10): {
                    res.innerHTML += '<br> O <strong>PDW</strong> está abaixo do valor de referência.'
                }
                break;
                default:
                    res.innerHTML += '<br> O <strong>PDW</strong> está dentro do valor de referência.'
            }
        }
    }

botaoHemograma.onclick = hemograma;
botaoLeucograma.onclick = leucograma;
botaoPlaqueta.onclick = plaquetas;
