export const getAllCards = async () => {
    try {
        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&language=pt`)
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        const data = await response.json();
        return { response: data.data }
    } catch (error) {
        return { error }
    }
}

export const getCardById = async (id: string) => {
    try {
        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&language=pt&id=${id}`)
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        const data = await response.json();
        return { response: data.data }
    } catch (error) {
        return { error }
    }
}

export const gellDivineBeast = async () => {
    try {
        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&language=pt&race=Divine-Beast`)
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        const data = await response.json();
        return { response: data.data }
    } catch (error) {
        return { error }
    }
}

export const getXYZCards = async (offset: number) => {
    try {
        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&language=pt&type=XYZ Monster&num=5&offset=${offset}`)
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        const data = await response.json();
        return { response: data }
    } catch (error) {
        return { error }
    }
}

export const getGallery = async (offset: number) => {
    try {
        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&language=pt&num=5&offset=${offset}`)
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        const data = await response.json();
        return { response: data }
    } catch (error) {
        return { error }
    }
}