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
    const questions = [
        // Formula -> name
        { prompt: 'CH3COO-', answers: ['acetate'], twoStep: true, alternate: 'C2H3O2-' },
        { prompt: 'NH4+', answers: ['ammonium'] },
        { prompt: 'CO3^2-', answers: ['carbonate'] },
        { prompt: 'ClO3-', answers: ['chlorate'] },
        { prompt: 'ClO2-', answers: ['chlorite'] },
        { prompt: 'CrO4^2-', answers: ['chromate'] },
        { prompt: 'CN-', answers: ['cyanide'] },
        { prompt: 'Cr2O7^2-', answers: ['dichromate'] },
        { prompt: 'H2PO4-', answers: ['dihydrogen phosphate'] },
        { prompt: 'HCO3-', answers: ['hydrogen carbonate', 'bicarbonate'], twoStep: true, alternate: 'bicarbonate' },
        { prompt: 'HPO4^2-', answers: ['hydrogen phosphate'] },
        { prompt: 'HSO4-', answers: ['hydrogen sulfate', 'bisulfate'], twoStep: true, alternate: 'bisulfate' },
        { prompt: 'HSO3-', answers: ['hydrogen sulfite', 'bisulfite'], twoStep: true, alternate: 'bisulfite' },
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

        // Name -> formula
        { prompt: 'acetate', answers: ['CH3COO-', 'C2H3O2-'], twoStep: true, alternate: 'C2H3O2-' },
        { prompt: 'ammonium', answers: ['NH4+'] },
        { prompt: 'carbonate', answers: ['CO3^2-'] },
        { prompt: 'chlorate', answers: ['ClO3-'] },
        { prompt: 'chlorite', answers: ['ClO2-'] },
        { prompt: 'chromate', answers: ['CrO4^2-'] },
        { prompt: 'cyanide', answers: ['CN-'] },
        { prompt: 'dichromate', answers: ['Cr2O7^2-'] },
        { prompt: 'dihydrogen phosphate', answers: ['H2PO4-'] },
        { prompt: 'hydrogen carbonate', answers: ['HCO3-'] },
        { prompt: 'bicarbonate', answers: ['HCO3-'] },
        { prompt: 'hydrogen phosphate', answers: ['HPO4^2-'] },
        { prompt: 'hydrogen sulfate', answers: ['HSO4-'] },
        { prompt: 'bisulfate', answers: ['HSO4-'] },
        { prompt: 'hydrogen sulfite', answers: ['HSO3-'] },
        { prompt: 'bisulfite', answers: ['HSO3-'] },
        { prompt: 'hydroxide', answers: ['OH-'] },
        { prompt: 'hypochlorite', answers: ['ClO-'] },
        { prompt: 'nitrate', answers: ['NO3-'] },
        { prompt: 'nitrite', answers: ['NO2-'] },
        { prompt: 'oxalate', answers: ['C2O4^2-'] },
        { prompt: 'permanganate', answers: ['MnO4-'] },
        { prompt: 'perchlorate', answers: ['ClO4-'] },
        { prompt: 'peroxide', answers: ['O2^2-'] },
        { prompt: 'phosphate', answers: ['PO4^3-'] },
        { prompt: 'sulfate', answers: ['SO4^2-'] },
        { prompt: 'sulfite', answers: ['SO3^2-'] },
        { prompt: 'thiocyanate', answers: ['SCN-'] },

        // Acid name -> formula
        { prompt: 'hydrochloric acid', answers: ['HCl'] },
        { prompt: 'hydrofluoric acid', answers: ['HF'] },
        { prompt: 'hydrobromic acid', answers: ['HBr'] },
        { prompt: 'hydroiodic acid', answers: ['HI'] },
        { prompt: 'hydrocyanic acid', answers: ['HCN'] },
        { prompt: 'hydrosulfuric acid', answers: ['H2S'] },
        { prompt: 'carbonic acid', answers: ['H2CO3'] },
        { prompt: 'nitric acid', answers: ['HNO3'] },
        { prompt: 'sulfuric acid', answers: ['H2SO4'] },
        { prompt: 'chloric acid', answers: ['HClO3'] },
        { prompt: 'phosphoric acid', answers: ['H3PO4'] },
        { prompt: 'iodic acid', answers: ['HIO3'] },
        { prompt: 'perchloric acid', answers: ['HClO4'] },
        { prompt: 'pernitric acid', answers: ['HNO4'] },
        { prompt: 'periodic acid', answers: ['HIO4'] },
        { prompt: 'carbonous acid', answers: ['H2CO2'] },
        { prompt: 'nitrous acid', answers: ['HNO2'] },
        { prompt: 'sulfurous acid', answers: ['H2SO3'] },
        { prompt: 'chlorous acid', answers: ['HClO2'] },
        { prompt: 'phosphorous acid', answers: ['H3PO3'] },
        { prompt: 'hypocarbonous acid', answers: ['H2CO'] },
        { prompt: 'hyponitrous acid', answers: ['HNO'] },
        { prompt: 'hyposulfurous acid', answers: ['H2SO2'] },
        { prompt: 'hypochlorous acid', answers: ['HClO'] },

        // Acid formula -> name
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
    const isFormulaAnswer = (answer) => /[A-Z]/.test(answer);

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

        const caseSensitive = item.answers.some(isFormulaAnswer);
        const normalize = (value) => caseSensitive ? value.trim() : value.trim().toLowerCase();
        const firstAnswer = normalize(inputElement.value);
        const acceptedAnswers = item.answers.map(normalize);

        if (item.twoStep) {
            if (!acceptedAnswers.includes(firstAnswer)) {
                inputElement.style.color = 'red';
                inputElement.value = item.answers[0];
                return false;
            }

            inputElement.style.color = 'green';
            inputElement2.style.display = 'inline-block';
            inputElement2.placeholder = 'Second answer';
            inputElement2.focus();

            await waitForClick();

            const secondAnswer = normalize(inputElement2.value);
            const remainingAnswer = acceptedAnswers.find(answer => answer !== firstAnswer);

            if (remainingAnswer && secondAnswer === remainingAnswer) {
                inputElement2.style.color = 'green';
                return true;
            }

            inputElement2.style.color = 'red';
            inputElement2.value = item.alternate || remainingAnswer || '';
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
        const order = generateRandomArray(questions.length);

        for (let i = 0; i < order.length; i++) {
            const item = questions[order[i]];
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
        }

        descriptionElement.innerHTML = 'You got ' + score + ' out of ' + questions.length + ' correct. \\n';
        questionElement.innerHTML = incorrect;

        inputElement.style.display = 'none';
        inputElement2.style.display = 'none';

        await waitForClick();

        inputElement.style.display = 'inline-block';
        runQuiz();
    }

    runQuiz();
});
