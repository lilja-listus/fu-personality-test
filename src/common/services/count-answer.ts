export function countAnswers(nationalities: any, dataToUpdate: string[]) {
    dataToUpdate.forEach((key) => nationalities[key]++)
    return nationalities
}

export function findFinalAnswer(nationalities: any) {
    let max = 0
    let finalAnswers: string[] = []

    Object.keys(nationalities).forEach((key) => {
        if (nationalities[key] > max) {
            max = nationalities[key]
        }
    })

    Object.keys(nationalities).forEach((key) => {
        if (nationalities[key] === max) {
            finalAnswers.push(key)
        }
    })

    return finalAnswers
}
