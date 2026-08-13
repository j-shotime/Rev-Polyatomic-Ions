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
    const quizItems = [
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

    let score = 0;
    let incorrect = '';
    let variable = '';

    const inputElement = document.getElementById('inputText');
    const inputElement2 = document.getElementById('inputText2');
    const button = document.getElementById('inputButton');

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

    async function getAnswer(promptText, targetInput) {
        document.getElementById('question').innerHTML = promptText + ' :';
        targetInput.style.display = 'inline-block';
        targetInput.readOnly = false;
        targetInput.value = '';
        targetInput.focus();

        await waitForClick();

        const answer = targetInput.value.trim();
        targetInput.readOnly = true;
        return answer;
    }

    async function runQuiz(randy) {
        for (let i = 0; i < randy.length; i++) {
            const item = quizItems[randy[i]];
            variable = item.prompt;
            const correctAnswers = item.answers;
            const firstAnswer = await getAnswer(variable, inputElement);

            if (item.twoStep) {
                const firstIsAnswer1 = firstAnswer === correctAnswers[0];
                const firstIsAnswer2 = firstAnswer === correctAnswers[1];

                if (firstIsAnswer1 || firstIsAnswer2) {
                    inputElement.style.color = 'green';
                    inputElement2.style.display = 'inline-block';
                    inputElement2.placeholder = 'Second accepted answer';

                    const remainingAnswer = firstIsAnswer1 ? correctAnswers[1] : correctAnswers[0];
                    const secondAnswer = await getAnswer(variable + ' (second answer)', inputElement2);

                    if (secondAnswer === remainingAnswer) {
                        score++;
                        inputElement2.style.color = 'green';
                    } else {
                        incorrect += (variable + ' is ' + correctAnswers.join(' or ') + '<br>');
                        inputElement2.style.color = 'red';
                        inputElement2.value = remainingAnswer;
                    }
                } else {
                    incorrect += (variable + ' is ' + correctAnswers.join(' or ') + '<br>');
                    inputElement.style.color = 'red';
                    inputElement.value = correctAnswers[0];
                }
            } else {
                if (correctAnswers.includes(firstAnswer)) {
                    score++;
                    inputElement.style.color = 'green';
                } else {
                    incorrect += (variable + ' is ' + correctAnswers.join(' or ') + '<br>');
                    inputElement.style.color = 'red';
                    inputElement.value = correctAnswers[0];
                }
            }

            await waitForClick();

            inputElement.style.color = 'white';
            inputElement.readOnly = false;
            inputElement.value = '';
            inputElement2.style.color = 'white';
            inputElement2.readOnly = false;
            inputElement2.value = '';
            inputElement2.style.display = 'none';

            console.log('Button clicked for:', variable);
            console.log('Inputed', firstAnswer);
        }

        const scoreElement = document.getElementById('description');
        const questionElement = document.getElementById('question');

        scoreElement.innerHTML = 'You got ' + score + ' out of ' + randy.length + ' correct. \n';
        questionElement.innerHTML = incorrect;

        inputElement.style.display = 'none';
        inputElement2.style.display = 'none';

        await waitForClick();

        inputElement.style.display = 'inline-block';
        runQuiz(generateRandomArray(quizItems.length));
    }

    runQuiz(generateRandomArray(quizItems.length));
});
