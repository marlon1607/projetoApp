import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons'; 

import { LinearGradient } from 'expo-linear-gradient';


import data from '../../data/QuizData';
import dataMatematica from '../../data/QuizData2';
import dataConhecimentos from '../../data/QuizData5';
import dataEtnica from '../../data/QuizData8';
import dataGoverno from '../../data/QuizData4';
import dataInovacao from '../../data/QuizData7';
import dataLeiDf from '../../data/QuizData6';
import dataTecnologia from '../../data/QuizData3';
import dataIngles from '../../data/QuizData9';
import dataProbabilidadeeEstatística from '../../data/QuizData10';
import simuladoA1 from '../../data/simuladoagente1';
import simuladoA2 from '../../data/simuladoagente2';
import simuladoT1 from '../../data/simuladotecnico1';
import simuladoT2 from '../../data/simuladotecnico2';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
container: {
    backgroundColor: '#082675',
     width: '95%',
       marginBottom: height/ 100,
        borderRadius: 20,
         borderColor: 'rgba(200,200,200,0.2)',
          borderWidth: 1,
           alignItems: 'center',
            justifyContent: 'center', 
},


container2: {
    backgroundColor: '#082675',
     width: '28.5%',
     height: height / 5.5,
       marginBottom: height/ 200,
        borderRadius: 15,
         borderColor: 'rgba(200,200,200,0.2)',
          borderWidth: 1,
           alignItems: 'center',
            justifyContent: 'center', 
            marginLeft: width * 0.02,
            
},
imagem: {
    width: 80,
    height: 80,
},

textoNumero: {
    color: '#FF8A00' ,
     fontSize: 16,
      fontWeight: 'bold', 
      marginTop: 3,
},
});



 
export default function Home() {

    const bolinha = () => {
        return(
            <View style={{width: 12, height: 12, borderRadius:6, backgroundColor: '#082675' , position: 'absolute', top: 1, right: 1, margin: 10,}}></View>
        )
    }


    const nomes = {
        nome1: 'Português',
        nome2: 'Matemática',
        nome3: 'Noções de Informática',
        nome4: 'Realidade Social, Histórica e Geográfica doDistrito Federal e da RIDE/DF',
        nome5: 'Direito administrativo',
        nome6: 'Direito Constitucional',
        nome7: 'Lei orgânica do df',
        nome8: 'Plano Distrital de Política para Mulheres',
        nome9: 'ingles',
        nome10: 'probabilidade e estatistica',
    } 
    const navigation = useNavigation();

    const quantidade = data;
    const quantidade2 = dataConhecimentos;
    const quantidade3 = dataEtnica;
    const quantidade4 = dataLeiDf;
    const quantidade5 = dataTecnologia;
    const quantidade6 = dataGoverno;
    const quantidade7 = dataInovacao;
    const quantidade8 = dataMatematica;

    var quantificador = data.length +  dataEtnica.length + dataConhecimentos.length + dataLeiDf.length + dataTecnologia.length + dataGoverno.length +  dataInovacao.length + dataMatematica.length + dataIngles.length + dataProbabilidadeeEstatística.length;

    return <View style={{ backgroundColor: '#2F68FF', paddingTop: height /50,  }}>
         
        <ScrollView>
        <LinearGradient
        // Background Linear Gradient
        colors={['#2F68FF','#2F68FF','#2F68FF' , '#2F68FF', '#2F68FF', '#fff']}
        start={{ x: 0, y: 0}}
      >
        <Image source={require('../../../assets/images/fundo.png')} style={{width: 110, height: 180, marginTop: height / 6.5, position: 'absolute', right: -15, }}/>
            <View style={{alignItems: 'center', justifyContent: 'center', padding: 5, position: 'absolute', right: 1,marginRight: width* 0.15, marginTop: height / 15,}}>
            </View>
        <View style={{width: '100%', height: height/ 3, paddingTop: 10, }}>


            <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>

                <View style={{flexDirection: 'row'}}>
                <Image source={require('../../../assets/images/banrisul.png')} style={{width: '45%', height: 70, }}/>
                </View>
            </View>
            <View style={{ width: '100%',  position: 'absolute', bottom: 5, zIndex: 20, alignItems: 'center'}}>
                
                <View style={{ alignItems: 'flex-start', justifyContent: 'center', width: '90%', }}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>SUPER SIMULADOS{quantificador}</Text>
                </View>
            </View>

        </View>

















        <View style={{ paddingBottom: height / 50, paddingTop: height / 50, backgroundColor: '#fff' }}>

            <View style={{ marginBottom: height / 30, width: '100%', alignItems: 'center', flexDirection: 'row', marginHorizontal: width * 0.025,}}> 
            <TouchableOpacity style={styles.container2} onPress={() => navigation.navigate('pagina', { nome: 'SUPER SIMULADO 1' })}
        >
            <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold',color: '#fff', fontSize: 12 }}>SIMULADO</Text>
            </View>
            
            <View style={{ borderRadius: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 15, left: 15,}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16, textShadowRadius: 3, textShadowColor: '#000'}}>1º</Text>
            </View>
            
        </TouchableOpacity>


        <TouchableOpacity style={styles.container2} onPress={() => navigation.navigate('pagina', { nome: 'SUPER SIMULADO 2' })}
        >
           <View>
           <Text style={{ textAlign: 'center', fontWeight: 'bold',color: '#fff', fontSize: 12 }}>SIMULADO</Text>
            </View>
            <View style={{ borderRadius: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 15, left: 15,}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16, textShadowRadius: 3, textShadowColor: '#000'}}>2º</Text>
            </View>
            
        </TouchableOpacity>



        <TouchableOpacity style={styles.container2} onPress={() => navigation.navigate('pagina', { nome: 'SUPER SIMULADO 3' })}
        >
            <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold',color: '#fff', fontSize: 12 }}>SIMULADO</Text>
            </View>
            <View style={{ borderRadius: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 15, left: 15,}}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16, textShadowRadius: 3, textShadowColor: '#000'}}>3º</Text>
            </View>
            
        </TouchableOpacity>


           
            </View>
        













<View style={{width: '100%', marginBottom: height / 60, marginLeft: width * 0.05}}>
<Text style={{fontWeight: 'bold', fontSize: 19, color: "#082675"}}>QUESTÕES POR DISCIPLINA </Text>
</View>




<View style={{ flexDirection: 'row'}}>
        <View style={{width: '50%', alignItems: 'center', paddingLeft: width*0.009 }}>
        <TouchableOpacity style={[styles.container, { height: height / 3.5,}]} onPress={() => navigation.navigate('pagina', { nome: 'Português' })}
        >
            {bolinha()}
            <Text style={{ textAlign: 'center', fontWeight: 'bold',color: '#fff', }}>{nomes.nome1}</Text>
            
        </TouchableOpacity>


        <TouchableOpacity style={[styles.container, {height: height / 3.5, }]} onPress={() => navigation.navigate('pagina', {nome: 'Raciocínio Lógico e Matemática'})}
        >
            {bolinha()}
            <Text style={{width: '90%', textAlign: 'center', fontWeight: 'bold',color: '#fff'}}>{nomes.nome2}</Text>
        </TouchableOpacity>



        <TouchableOpacity style={[styles.container, { height: height / 3.5,}]} onPress={() => navigation.navigate('pagina', {nome: 'Noções de Informática'})}
        >
            {bolinha()}
            <Text style={{width: '90%', textAlign: 'center', fontWeight: 'bold',color: '#fff'}}>{nomes.nome3}</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[styles.container, { height: height / 3.5,}]} onPress={() => navigation.navigate('pagina', {nome: 'Realidade Social, Histórica'})}
        >
            {bolinha()}
            <Text style={{width: '90%', textAlign: 'center', fontWeight: 'bold',color: '#fff'}}>{nomes.nome4}</Text>
        </TouchableOpacity>




        <TouchableOpacity style={[styles.container, { height: height / 3.5,}]} onPress={() => navigation.navigate('pagina', {nome: 'Realidade Social, Histórica'})}
        >
            {bolinha()}
            <Text style={{width: '90%', textAlign: 'center', fontWeight: 'bold',color: '#fff'}}>{nomes.nome9}</Text>
        </TouchableOpacity>


        </View>



        <View style={{width: '50%', alignItems: 'center', paddingRight: width*0.009}}>
        <TouchableOpacity style={[styles.container, {height: height / 3.5, }]} onPress={() => navigation.navigate('pagina', {nome: 'Plano Distrital de Política para Mulheres'})}
        >
            {bolinha()}
            <Text style={{width: '90%', textAlign: 'center', fontWeight: 'bold',color: '#fff'}}>{nomes.nome8}</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[styles.container, { height: height / 3.5,}]} onPress={() => navigation.navigate('pagina', {nome: 'Direito Constituciona'})}
        >
            {bolinha()}
            <Text style={{ textAlign: 'center', fontWeight: 'bold',color: '#fff'}}>{nomes.nome6}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.container, { height: height / 3.5,}]} onPress={() => navigation.navigate('pagina', {nome: 'Direito administrativo'})}
        >
            {bolinha()}
            <Text style={{width: '90%', textAlign: 'center', fontWeight: 'bold',color: '#fff'}}>{nomes.nome5}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.container, { height: height / 3.5,}]} onPress={() => navigation.navigate('pagina', {nome: 'Lei orgânica do df'})}
        >
            {bolinha()}
            <Text style={{width: '90%', textAlign: 'center', fontWeight: 'bold',color: '#fff'}}>{nomes.nome7}</Text>
        </TouchableOpacity>



        <TouchableOpacity style={[styles.container, { height: height / 3.5,}]} onPress={() => navigation.navigate('pagina', {nome: 'Lei orgânica do df'})}
        >
            {bolinha()}
            <Text style={{width: '90%', textAlign: 'center', fontWeight: 'bold',color: '#fff'}}>{nomes.nome10}</Text>
        </TouchableOpacity>

        </View>
        </View>
        </View>
        </LinearGradient>
        </ScrollView>
    </View>;
}