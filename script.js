function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(i);
    }

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    const primaryQuestions = [
        { prompt: 'Acetate', answers: ['CH3COO-', 'C2H3O2-'], twoStep: true },
        { prompt: 'Ammonium', answers: ['NH4+'] },
        { prompt: 'Carbonate', answers: ['CO3^2-'] },
        { prompt: 'Chlorate', answers: ['ClO3-'] },
        { prompt: 'Chlorite', answers: ['ClO2-'] },
        { prompt: 'Chromate', answers: ['CrO4^2-'] },
        { prompt: 'Cyanide', answers: ['CN-'] },
        { prompt: 'Dichromate', answers: ['Cr2O7^2-'] },
        { prompt: 'Dihydrogen phosphate', answers: ['H2PO4-'] },
        { prompt: 'Hydrogen carbonate', answers: ['HCO3-'] },
        { prompt: 'Bicarbonate', answers: ['HCO3-'] },
        { prompt: 'Hydrogen phosphate', answers: ['HPO4^2-'] },
        { prompt: 'Hydrogen sulfate', answers: ['HSO4-'] },
        { prompt: 'Bisulfate', answers: ['HSO4-'] },
        { prompt: 'Hydrogen sulfite', answers: ['HSO3-'] },
        { prompt: 'Bisulfite', answers: ['HSO3-'] },
        { prompt: 'Hydroxide', answers: ['OH-'] },
        { prompt: 'Hypochlorite', answers: ['ClO-'] },
        { prompt: 'Nitrate', answers: ['NO3-'] },
        { prompt: 'Nitrite', answers: ['NO2-'] },
        { prompt: 'Oxalate', answers: ['C2O4^2-'] },
        { prompt: 'Permanganate', answers: ['MnO4-'] },
        { prompt: 'Perchlorate', answers: ['ClO4-'] },
        { prompt: 'Peroxide', answers: ['O2^2-'] },
        { prompt: 'Phosphate', answers: ['PO4^3-'] },
        { prompt: 'Sulfate', answers: ['SO4^2-'] },
        { prompt: 'Sulfite', answers: ['SO3^2-'] },
        { prompt: 'Thiocyanate', answers: ['SCN-'] },

        { prompt: 'Hydrochloric acid', answers: ['HCl'] },
        { prompt: 'Hydrofluoric acid', answers: ['HF'] },
        { prompt: 'Hydrobromic acid', answers: ['HBr'] },
        { prompt: 'Hydroiodic acid', answers: ['HI'] },
        { prompt: 'Hydrocyanic acid', answers: ['HCN'] },
        { prompt: 'Hydrosulfuric acid', answers: ['H2S'] },
        { prompt: 'Carbonic acid', answers: ['H2CO3'] },
        { prompt: 'Nitric acid', answers: ['HNO3'] },
        { prompt: 'Sulfuric acid', answers: ['H2SO4'] },
        { prompt: 'Chloric acid', answers: ['HClO3'] },
        { prompt: 'Phosphoric acid', answers: ['H3PO4'] },
        { prompt: 'Iodic acid', answers: ['HIO3'] },
        { prompt: 'Perchloric acid', answers: ['HClO4'] },
        { prompt: 'Pernitric acid', answers: ['HNO4'] },
        { prompt: 'Periodic acid', answers: ['HIO4'] },
        { prompt: 'Carbonous acid', answers: ['H2CO2'] },
        { prompt: 'Nitrous acid', answers: ['HNO2'] },
        { prompt: 'Sulfurous acid', answers: ['H2SO3'] },
        { prompt: 'Chlorous acid', answers: ['HClO2'] },
        { prompt: 'Phosphorous acid', answers: ['H3PO3'] },
        { prompt: 'Hypocarbonous acid', answers: ['H2CO'] },
        { prompt: 'Hyponitrous acid', answers: ['HNO'] },
        { prompt: 'Hyposulfurous acid', answers: ['H2SO2'] },
        { prompt: 'Hypochlorous acid', answers: ['HClO'] },
    ];

    const reverseQuestions = [
        { prompt: 'CH3COO-', answers: ['acetate'] },
        { prompt: 'C2H3O2-', answers: ['acetate'] },
        { prompt: 'NH4+', answers: ['ammonium'] },
        { prompt: 'CO3^2-', answers: ['carbonate'] },
        { prompt: 'ClO3-', answers: ['chlorate'] },
        { prompt: 'ClO2-', answers: ['chlorite'] },
        { prompt: 'CrO4^2-', answers: ['chromate'] },
        { prompt: 'CN-', answers: ['cyanide'] },
        { prompt: 'Cr2O7^2-', answers: ['dichromate'] },
        { prompt: 'H2PO4-', answers: ['dihydrogen phosphate'] },
        { prompt: 'HCO3-', answers: ['hydrogen carbonate', 'bicarbonate'] },
        { prompt: 'HPO4^2-', answers: ['hydrogen phosphate'] },
        { prompt: 'HSO4-', answers: ['hydrogen sulfate', 'bisulfate'] },
        { prompt: 'HSO3-', answers: ['hydrogen sulfite', 'bisulfite'] },
        { prompt: 'OH-', answers: ['hydroxide'] },
        { prompt: 'ClO-', answers: ['hypochlorite'] },
        { prompt: 'NO3-', answers: ['nitrate'] },
        { prompt: 'NO2-', answers: ['nitrite'] },
        { prompt: 'C2O4^2-', answers: ['oxalate'] },
        { prompt: 'MnO4-', answers: ['permanganate'] },
        { prompt: 'ClO4-', answers: ['perchlorate'] },
        { prompt: 'O2^2-', answers: ['peroxide'] },
        { prompt: 'PO4^3-', answers: ['phosphate'] },
        { prompt: 'SO4^2-', answers: ['sulfate'] },
        { prompt: 'SO3^2-', answers: ['sulfite'] },
        { prompt: 'SCN-', answers: ['thiocyanate'] },

        { prompt: 'HCl', answers: ['hydrochloric acid'] },
        { prompt: 'HF', answers: ['hydrofluoric acid'] },
        { prompt: 'HBr', answers: ['hydrobromic acid'] },
        { prompt: 'HI', answers: ['hydroiodic acid'] },
        { prompt: 'HCN', answers: ['hydrocyanic acid'] },
        { prompt: 'H2S', answers: ['hydrosulfuric acid'] },
        { prompt: 'H2CO3', answers: ['carbonic acid'] },
        { prompt: 'HNO3', answers: ['nitric acid'] },
        { prompt: 'H2SO4', answers: ['sulfuric acid'] },
        { prompt: 'HClO3', answers: ['chloric acid'] },
        { prompt: 'H3PO4', answers: ['phosphoric acid'] },
        { prompt: 'HIO3', answers: ['iodic acid'] },
        { prompt: 'HClO4', answers: ['perchloric acid'] },
        { prompt: 'HNO4', answers: ['pernitric acid'] },
        { prompt: 'HIO4', answers: ['periodic acid'] },
        { prompt: 'H2CO2', answers: ['carbonous acid'] },
        { prompt: 'HNO2', answers: ['nitrous acid'] },
        { prompt: 'H2SO3', answers: ['sulfurous acid'] },
        { prompt: 'HClO2', answers: ['chlorous acid'] },
        { prompt: 'H3PO3', answers: ['phosphorous acid'] },
        { prompt: 'H2CO', answers: ['hypocarbonous acid'] },
        { prompt: 'HNO', answers: ['hyponitrous acid'] },
        { prompt: 'H2SO2', answers: ['hyposulfurous acid'] },
        { prompt: 'HClO', answers: ['hypochlorous acid'] },
    ];

    let score = 0;
    let incorrect = '';

    const inputElement = document.getElementById('inputText');
    const inputElement2 = document.getElementById('inputText2');
    const button = document.getElementById('inputButton');
    const questionElement = document.getElementById('question');
    const descriptionElement = document.getElementById('description');

    function waitForClick() {
        return new Promise(resolve => {
            const handler = () => {
                button.removeEventListener('click', handler);
                document.removeEventListener('keyup', keyHandler);
                resolve();
            };

            const keyHandler = (event) => {
                if (event.key === 'Enter') {
                    handler();
                }
            };

            button.addEventListener('click', handler);
            document.addEventListener('keyup', keyHandler);
        });
    }

    async function askQuestion(item) {
        questionElement.innerHTML = item.prompt + ' :';
        inputElement.style.display = 'inline-block';
        inputElement2.style.display = 'none';
        inputElement.readOnly = false;
        inputElement2.readOnly = false;
        inputElement.value = '';
        inputElement2.value = '';
        inputElement.focus();

        await waitForClick();

        const firstAnswer = inputElement.value.trim().toLowerCase();
        const acceptedAnswers = item.answers.map(answer => answer.toLowerCase());

        if (item.twoStep) {
            const firstCorrect = acceptedAnswers.includes(firstAnswer);
            if (!firstCorrect) {
                return false;
            }

            inputElement.style.color = 'green';
            inputElement2.style.display = 'inline-block';
            inputElement2.placeholder = 'Second accepted answer';
            inputElement2.focus();

            await waitForClick();

            const secondAnswer = inputElement2.value.trim().toLowerCase();
            const remainingAnswer = acceptedAnswers.find(answer => answer !== firstAnswer);

            if (secondAnswer === remainingAnswer) {
                inputElement2.style.color = 'green';
                return true;
            }

            inputElement2.style.color = 'red';
            inputElement2.value = item.answers.find(answer => answer.toLowerCase() === remainingAnswer) || remainingAnswer;
            return false;
        }

        if (acceptedAnswers.includes(firstAnswer)) {
            inputElement.style.color = 'green';
            return true;
        }

        inputElement.style.color = 'red';
        inputElement.value = item.answers[0];
        return false;
    }

    async function runQuiz() {
        const combinedQuestions = [...primaryQuestions, ...reverseQuestions];
        const order = generateRandomArray(combinedQuestions.length);

        for (let i = 0; i < order.length; i++) {
            const item = combinedQuestions[order[i]];
            const correct = await askQuestion(item);

            if (correct) {
                score++;
            } else {
                incorrect += (item.prompt + ' is ' + item.answers.join(' or ') + '<br>');
            }

            await waitForClick();

            inputElement.style.color = 'white';
            inputElement2.style.color = 'white';
            inputElement.readOnly = false;
            inputElement2.readOnly = false;
            inputElement.value = '';
            inputElement2.value = '';
            inputElement2.style.display = 'none';

            console.log('Button clicked for:', item.prompt);
        }

        descriptionElement.innerHTML = 'You got ' + score + ' out of ' + combinedQuestions.length + ' correct. \n';
        questionElement.innerHTML = incorrect;

        inputElement.style.display = 'none';
        inputElement2.style.display = 'none';

        await waitForClick();

        inputElement.style.display = 'inline-block';
        runQuiz();
    }

    runQuiz();
});
