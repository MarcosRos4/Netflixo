import { StyleSheet, useWindowDimensions, Dimensions } from "react-native"

export default function definirEstilo() {
    let width = useWindowDimensions().width
    if (width > 1200) {return stylesDesktop}
    else if (width > 800) {return stylesTablet}
    else {return stylesPhone}
}
// >1200
const stylesDesktop = StyleSheet.create({
//  capa
    capaContainer:{
        height:Dimensions.get('window').height * 0.8
    },
    capaBackgroundImg: {
        height: "100%",
        resizeMode:'cover',
        width:'100%'
    },
    capaGradient: {
        flexDirection: 'column'
    },
    capaHeader: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 25,
    },
    headerEsquerda: {
        flex: 0.18,
        alignItems: 'flex-end',
        paddingLeft:'10%'
    },
    headerCentro: {
        flex: 0.6
    },
    headerDireita: {
        flexDirection: 'row',
        flex:0.25,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap:20,
        paddingRight:'10%'
    },
    headerDireitaButton: {
        height: 30,
        width:80,
        alignItems: "center",
        justifyContent: 'center',
        padding:0
    },
    headerDireitaButtonLabel: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 400,
        overflow:'visible'
    },
    capaContentContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 200,
        height: 900
    },
    capaContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    capaTexto: {
        color: 'white',
        textAlign:'center',
        fontWeight: '900',
        paddingBottom: 20,
        userSelect: "none",
        fontFamily:'Gothan, sans-serif'
    },
// anúncio
    anuncioContainer: {
        flex: 1,
        zIndex:1,
        width:'90%',
        position:"absolute",
        top: '14%',
        left: '5%',
        height:136
    },
    anuncioBackgroundImage:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20,
        paddingTop:15,
        resizeMode:'cover',
        width:'100%'
    },
    pipoca:{
        flexDirection:'row',
        resizeMode:'contain',
        height:100
    },
    anuncioTextoContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        gap:5
    },
    anuncioTitulo:{
        color:'white',
        fontWeight:'400',
        textAlign:'left',
        fontSize:20
    },
    anuncioVenda:{
        color:'white',
        fontWeight:'400',
        textAlign:'left',
        fontSize:15
    },
    anuncioSaiba:{
        color:'#00a2ff',
        textDecorationLine:"underline",
        textDecorationColor:'#00a2ff',
        fontWeight:'200',
        fontSize:15
    },
// faixa 1
    f1Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:140,
        
    },
    f1TextContainer: {
        alignItems:'flex-end',
        justifyContent:'center',        
        flex: 0.5
    },
    f1ImageContainer: {
        alignItems:'flex-start',
        flex: 0.5
    },
    f1Image:{
        userSelect:'none',
        resizeMode:'contain',
        width:'80%',
    },
    f1Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"justify",
        userSelect:"none",
        marginBottom:15
    },
    f1Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
// faixa 2
    f2Container: {
        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:100,
        gap:30
        
    },
    f2TextContainer: {
        alignItems:'flex-start',
        justifyContent:'center',
        flex: 0.5
    },
    f2ImageContainer: {
        alignItems:'flex-end',
        flex: 0.5,
    },
    f2Image:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    f2Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15
    },
    f2Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
// faixa 3
    f3Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:100,       
    },
    f3TextContainer: {
        alignItems:'flex-end',
        justifyContent:'center',
        flex: 0.5
    },
    f3ImageContainer: {
        alignItems:'flex-start',
        flex: 0.5
    },
    f3Image:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    f3Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15
    },
    f3Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
    // faixa 4
        f4Container: {

        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:100,
        gap:30
        
    },
    f4TextContainer: {
        alignItems:'flex-start',
        justifyContent:'center',
        flex: 0.5
    },
    f4ImageContainer: {
        alignItems:'flex-end',
        flex: 0.5
    },
    f4Image:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    f4Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15,
        lineHeight:80
    },
    f4Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
// faixa 5
    f5Container: {
        backgroundColor: 'black',
        flexDirection: 'column',
        paddingVertical: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    f5Title: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        marginBottom: 40,
        userSelect:'none'
    },
    f5Section: {
        width: '80%',
        gap: 10,
        marginBottom: 50,
    },
    f5Accordion: {
        color: "#fff",
        fontSize: 25,
    },
    f5Item: {
        backgroundColor: "#1c1b1f",
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        height: 170,
        
    }
})
// >810
const stylesTablet = StyleSheet.create({

//  capa
    capaContainer:{
        height:Dimensions.get('window').height * 0.8
    },
    capaBackgroundImg: {
        height: "100%",
        resizeMode:'cover',
        width:'100%'
    },
    capaGradient: {
        flexDirection: 'column'
    },
    capaHeader: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 50,        
    },
    headerEsquerda: {
        flex: 0.3,
        alignItems: 'flex-start',
        paddingLeft:'10%',        
    },
    headerCentro: {
        flex: 0.4
    },
    headerDireita: {
        flexDirection: 'row',
        flex:0.3,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap:20,
        paddingRight:'10%'
    },
    headerDireitaButton: {
        height: 30,
        width:80,
        alignItems: "center",
        justifyContent: 'center',
        padding:0
    },
    headerDireitaButtonLabel: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 400,
        overflow:'visible'
    },
    capaContentContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 80,
        height:Dimensions.get('window').height
    },
    capaContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    capaTexto: {
        color: 'white',
        textAlign:'center',
        fontWeight: '900',
        paddingBottom: 20,
        userSelect: "none",
        fontFamily:'Gothan, sans-serif'
    },
// anúncio
    anuncioContainer: {
        flex: 1,
        zIndex:1,
        width:'90%',
        position:"absolute",
        top: '11%',
        left: '5%',
        height:136
    },
    anuncioBackgroundImage:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20,
        paddingTop:15,
        resizeMode:'cover',
        width:'100%'
    },
    pipoca:{
        flexDirection:'row',
        resizeMode:'contain',
        height:100
    },
    anuncioTextoContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        gap:5
    },
    anuncioTitulo:{
        color:'white',
        fontWeight:'400',
        textAlign:'left',
        fontSize:20
    },
    anuncioVenda:{
        color:'white',
        fontWeight:'400',
        textAlign:'left',
        fontSize:15
    },
    anuncioSaiba:{
        color:'#00a2ff',
        textDecorationLine:"underline",
        textDecorationColor:'#00a2ff',
        fontWeight:'200',
        fontSize:15
    },
// faixa 1
    f1Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:25,
        
    },
    f1TextContainer: {
        alignItems:'flex-end',
        justifyContent:'center',        
        flex: 0.5
    },
    f1ImageContainer: {
        alignItems:'flex-start',
        flex: 0.5
    },
    f1Image:{
        userSelect:'none',
        resizeMode:'contain',
        width:'80%',
    },
    f1Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"justify",
        userSelect:"none",
        marginBottom:15
    },
    f1Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
// faixa 2
    f2Container: {
        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:25,
        gap:30
        
    },
    f2TextContainer: {
        alignItems:'flex-start',
        justifyContent:'center',
        flex: 0.5
    },
    f2ImageContainer: {
        alignItems:'flex-end',
        flex: 0.5,
    },
    f2Image:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    f2Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15
    },
    f2Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
// faixa 3
    f3Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:25,       
    },
    f3TextContainer: {
        alignItems:'flex-end',
        justifyContent:'center',
        flex: 0.5
    },
    f3ImageContainer: {
        alignItems:'flex-start',
        flex: 0.5
    },
    f3Image:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    f3Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15
    },
    f3Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
    // faixa 4
        f4Container: {

        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:25,
        gap:30
        
    },
    f4TextContainer: {
        alignItems:'flex-start',
        justifyContent:'center',
        flex: 0.5
    },
    f4ImageContainer: {
        alignItems:'flex-end',
        flex: 0.5
    },
    f4Image:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    f4Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15,
        lineHeight:80
    },
    f4Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
// faixa 5
    f5Container: {
        backgroundColor: 'black',
        flexDirection: 'column',
        paddingVertical: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    f5Title: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        marginBottom: 40,
        userSelect:'none'
    },
    f5Section: {
        width: '80%',
        gap: 10,
        marginBottom: 50,
    },
    f5Accordion: {
        color: "#fff",
        fontSize: 25,
    },
    f5Item: {
        backgroundColor: "#1c1b1f",
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        height: 170,
        
    }})
// >350
const stylesPhone = StyleSheet.create({
//  capa
    capaContainer:{
        height:Dimensions.get('window').height * 0.8
    },
    capaBackgroundImg: {
        height: "100%",
        resizeMode:'cover',
        width:'100%'
    },
    capaGradient: {
        flexDirection: 'column'
    },
    capaHeader: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 25,
    },
    headerEsquerda: {
        flex: 0.18,
        alignItems: 'flex-end',
        paddingLeft:'10%'
    },
    headerCentro: {
        flex: 0.6
    },
    headerDireita: {
        flexDirection: 'row',
        flex:0.25,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap:20,
        paddingRight:'10%'
    },
    headerDireitaButton: {
        height: 30,
        width:80,
        alignItems: "center",
        justifyContent: 'center',
        padding:0
    },
    headerDireitaButtonLabel: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 400,
        overflow:'visible'
    },
    capaContentContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 200,
        height: 900
    },
    capaContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    capaTexto: {
        color: 'white',
        textAlign:'center',
        fontWeight: '900',
        paddingBottom: 20,
        userSelect: "none",
        fontFamily:'Gothan, sans-serif'
    },
// anúncio
    anuncioContainer: {
        flex: 1,
        zIndex:1,
        width:'90%',
        position:"absolute",
        top: '14%',
        left: '5%',
        height:136
    },
    anuncioBackgroundImage:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20,
        paddingTop:15,
        resizeMode:'cover',
        width:'100%'
    },
    pipoca:{
        flexDirection:'row',
        resizeMode:'contain',
        height:100
    },
    anuncioTextoContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        gap:5
    },
    anuncioTitulo:{
        color:'white',
        fontWeight:'400',
        textAlign:'left',
        fontSize:20
    },
    anuncioVenda:{
        color:'white',
        fontWeight:'400',
        textAlign:'left',
        fontSize:15
    },
    anuncioSaiba:{
        color:'#00a2ff',
        textDecorationLine:"underline",
        textDecorationColor:'#00a2ff',
        fontWeight:'200',
        fontSize:15
    },
// faixa 1
    f1Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:140,
        
    },
    f1TextContainer: {
        alignItems:'flex-end',
        justifyContent:'center',        
        flex: 0.5
    },
    f1ImageContainer: {
        alignItems:'flex-start',
        flex: 0.5
    },
    f1Image:{
        userSelect:'none',
        resizeMode:'contain',
        width:'80%',
    },
    f1Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"justify",
        userSelect:"none",
        marginBottom:15
    },
    f1Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
// faixa 2
    f2Container: {
        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:25,
        gap:30
        
    },
    f2TextContainer: {
        alignItems:'flex-start',
        justifyContent:'center',
        flex: 0.5
    },
    f2ImageContainer: {
        alignItems:'flex-end',
        flex: 0.5,
    },
    f2Image:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    f2Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15
    },
    f2Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
// faixa 3
    f3Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:25,       
    },
    f3TextContainer: {
        alignItems:'flex-end',
        justifyContent:'center',
        flex: 0.5
    },
    f3ImageContainer: {
        alignItems:'flex-start',
        flex: 0.5
    },
    f3Image:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    f3Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15
    },
    f3Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
    // faixa 4
        f4Container: {

        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:25,
        gap:30
        
    },
    f4TextContainer: {
        alignItems:'flex-start',
        justifyContent:'center',
        flex: 0.5
    },
    f4ImageContainer: {
        alignItems:'flex-end',
        flex: 0.5
    },
    f4Image:{
        userSelect:'none',
        width:'80%',
        resizeMode:"contain"
    },
    f4Title:{
        width:'80%',
        fontWeight:"bold",
        textAlign:"left",
        userSelect:"none",
        marginBottom:15,
        lineHeight:80
    },
    f4Message:{
        width:'80%',
        textAlign:"justify",
        userSelect:"none"
    },
// faixa 5
    f5Container: {
        backgroundColor: 'black',
        flexDirection: 'column',
        paddingVertical: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    f5Title: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        marginBottom: 40,
        userSelect:'none'
    },
    f5Section: {
        width: '80%',
        gap: 10,
        marginBottom: 50,
    },
    f5Accordion: {
        color: "#fff",
        fontSize: 25,
    },
    f5Item: {
        backgroundColor: "#1c1b1f",
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        height: 170,
        
    }
})