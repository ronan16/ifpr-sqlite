import React, { useCallback, useState } from "react";
import { Text, View, Button } from "react-native";

import { getConnection } from "typeorm";


export default function Cadastro() {
    const [texto, setTexto] = useState("")

    const carregarDados = useCallback(async () => {
        const connection = getConnection();
        const car = await connection.getRepository("Car").findOne({ id: 2 })

        setTexto(`ID: ${car[0].id} marca: ${car[0].brand} e Modelo: ${car[0].model}`)
    })


    return (
        <View>
            <Text>Exemplo de busca no banco de dados</Text>
            <Button title="Buscar" onPress={carregarDados} />
            <Text>{texto}</Text>
        </View>
    )
}