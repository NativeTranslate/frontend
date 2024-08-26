import {useEffect, useState} from 'react';

export const FlipWords = ({words, typingSpeed = 150, pauseTime = 1000, className}: any) => {
	const [displayedText, setDisplayedText] = useState('');
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [charIndex, setCharIndex] = useState(0);

	useEffect(() => {
		const currentWord = words[currentWordIndex];

		if (isDeleting) {
			if (charIndex > 0) {
				setTimeout(() => {
					setDisplayedText(currentWord.slice(0, charIndex - 1));
					setCharIndex(prev => prev - 1);
				}, typingSpeed);
			} else {
				setIsDeleting(false);
				setCurrentWordIndex(prev => (prev + 1) % words.length);
			}
		} else {
			if (charIndex < currentWord.length) {
				setTimeout(() => {
					setDisplayedText(currentWord.slice(0, charIndex + 1));
					setCharIndex(prev => prev + 1);
				}, typingSpeed);
			} else {
				setTimeout(() => setIsDeleting(true), pauseTime);
			}
		}
	}, [charIndex, isDeleting, currentWordIndex, words, typingSpeed, pauseTime]);


	return (
		<span className={`inline-block text-4xl w-full h-full ${className}`}>
      <p className={'text-4xl underline'}>
        {displayedText}
      </p>
    </span>
	);
};
