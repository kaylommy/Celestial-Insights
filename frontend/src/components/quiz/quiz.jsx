import React, { useState } from 'react';
import { Container, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Box } from '@mui/material';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      label: '1. What part of your life do you most need help with?',
      name: 'question1',
      options: ['Mental Health', 'Career', 'Relationships'],
    },
    {
      label: '2. What intentions or goals do you specifically have?',
      name: 'question2',
      options: ['Enhancing creativity', 'Stress relief', 'Clarity', 'Boosting energy'],
    },
    {
      label: '3. What best describes your emotional state?',
      name: 'question3',
      options: ['Overwhelmed', 'In need of inspirations', 'Tired', 'Curious'],
    },
    {
      label: '4. What scares you the most?',
      name: 'question4',
      options: ['Heartbreak', 'The past', 'Being lied to', 'Failure', 'Change'],
    },
    {
      label: '5. What is your favorite time of day?',
      name: 'question5',
      options: ['Morning', 'Afternoon', 'Evening', 'Night'],
    },
  ];

  const crystalMapping = {
    'Mental Health': { name: 'Amethyst', description: 'Amethyst is renowned for its soothing and stress-relieving properties, making it a popular choice for those seeking tranquility and emotional balance. This beautiful violet crystal, a variety of quartz, is often used in meditation and spiritual practices due to its reputed ability to promote a sense of calm and clarity. Amethyst is believed to help alleviate anxiety and reduce stress by encouraging a peaceful mindset and fostering a sense of inner peace. Its calming energy is said to support restful sleep and enhance overall emotional stability, making it a valuable tool for personal growth and emotional healing. Whether used in jewelry, placed in living spaces, or held during meditation, amethyst is cherished for its potential to create a serene and harmonious environment.' },

    'Career': { name: 'Citrine', description: 'Citrine is celebrated for its reputed ability to attract wealth and success. This vibrant yellow gemstone is often associated with abundance and prosperity, and is believed to stimulate financial growth and positive opportunities. Its energizing properties are thought to foster a mindset of confidence and optimism, making it a popular choice for those looking to enhance their career prospects and achieve their goals.' },

    'Relationships': { name: 'Rose Quartz', description: 'Rose Quartz is widely cherished for its ability to promote love and harmony, both within oneself and in relationships with others. This delicate pink gemstone is often referred to as the "stone of unconditional love," and is believed to enhance feelings of compassion, empathy, and forgiveness. It is said to open the heart chakra, facilitating deeper connections and emotional healing. Rose Quartz can help to nurture self-love and self-acceptance, creating a foundation for positive relationships and fostering a sense of inner peace. Whether used in personal meditation, placed in living spaces, or worn as jewelry, Rose Quartz is valued for its gentle, nurturing energy that encourages a loving and harmonious atmosphere.' },

    'Enhancing creativity': { name: 'Carnelian', description: 'Carnelian is celebrated for its remarkable ability to boost creativity and motivation, making it a favored stone for those seeking to ignite their passion and drive. This vibrant orange to reddish-brown gemstone is associated with vitality, energy, and action, and is often used to stimulate the sacral chakra, which governs creativity and personal power. By enhancing one\'s creative vision and ambition, Carnelian is believed to help overcome procrastination and inspire bold, innovative thinking. It can also increase motivation by providing a sense of purpose and determination, aiding in the pursuit of goals and ambitions. Whether used in artistic endeavors, personal projects, or professional endeavors, Carnelian is valued for its invigorating energy that fosters enthusiasm and drives progress.' },

    'Stress relief': { name: 'Lepidolite', description: 'Lepidolite is renowned for its profound calming and stress-relieving properties, making it a highly valued stone for emotional well-being. This soothing mineral, which typically exhibits a beautiful lilac or violet hue due to its lithium content, is often associated with tranquility and stability. Lepidolite is believed to help alleviate anxiety, depression, and emotional turbulence by balancing mood swings and promoting a sense of inner peace. Its gentle energy is said to encourage relaxation and diminish feelings of stress by facilitating a serene and harmonious environment. Lepidolite is also known for its ability to aid in emotional healing and spiritual growth, supporting individuals in navigating life\'s challenges with greater ease and clarity. Whether used during meditation, placed in a living space, or kept close as a personal talisman, Lepidolite is cherished for its capacity to bring calm and equilibrium to the mind and spirit.' },

    'Clarity': { name: 'Clear Quartz', description: 'Clear Quartz is renowned for its ability to enhance clarity and focus. This versatile crystal is often used to amplify mental clarity, improve concentration, and support decision-making. Its clear, radiant energy helps to clear the mind of distractions, making it an ideal tool for meditation, goal-setting, and problem-solving.' },

    'Boosting energy': { name: 'Tiger\'s Eye', description: 'Tiger\'s Eye is celebrated for its ability to boost energy and confidence. This golden-brown gemstone is known for revitalizing the body and mind, enhancing self-assurance, and empowering individuals to tackle challenges with strength and clarity. By stimulating the solar plexus chakra, Tiger\'s Eye promotes vitality and a proactive attitude, making it a valuable ally for achieving personal and professional goals.' },

    'Overwhelmed': { name: 'Lepidolite', description: 'Lepidolite is renowned for its profound calming and stress-relieving properties, making it a highly valued stone for emotional well-being. This soothing mineral, which typically exhibits a beautiful lilac or violet hue due to its lithium content, is often associated with tranquility and stability. Lepidolite is believed to help alleviate anxiety, depression, and emotional turbulence by balancing mood swings and promoting a sense of inner peace. Its gentle energy is said to encourage relaxation and diminish feelings of stress by facilitating a serene and harmonious environment. Lepidolite is also known for its ability to aid in emotional healing and spiritual growth, supporting individuals in navigating life\'s challenges with greater ease and clarity. Whether used during meditation, placed in a living space, or kept close as a personal talisman, Lepidolite is cherished for its capacity to bring calm and equilibrium to the mind and spirit.' },

    'In need of inspirations': { name: 'Carnelian', description: 'Carnelian is celebrated for its remarkable ability to boost creativity and motivation, making it a favored stone for those seeking to ignite their passion and drive. This vibrant orange to reddish-brown gemstone is associated with vitality, energy, and action, and is often used to stimulate the sacral chakra, which governs creativity and personal power. By enhancing one\'s creative vision and ambition, Carnelian is believed to help overcome procrastination and inspire bold, innovative thinking. It can also increase motivation by providing a sense of purpose and determination, aiding in the pursuit of goals and ambitions. Whether used in artistic endeavors, personal projects, or professional endeavors, Carnelian is valued for its invigorating energy that fosters enthusiasm and drives progress.' },

    'Tired': { name: 'Tiger\'s Eye', description: 'Tiger\'s Eye is celebrated for its ability to boost energy and confidence. This golden-brown gemstone is known for revitalizing the body and mind, enhancing self-assurance, and empowering individuals to tackle challenges with strength and clarity. By stimulating the solar plexus chakra, Tiger\'s Eye promotes vitality and a proactive attitude, making it a valuable ally for achieving personal and professional goals.' },

    'Curious': { name: 'Clear Quartz', description: 'Clear Quartz is renowned for its ability to enhance clarity and focus. This versatile crystal is often used to amplify mental clarity, improve concentration, and support decision-making. Its clear, radiant energy helps to clear the mind of distractions, making it an ideal tool for meditation, goal-setting, and problem-solving.' },

    'Heartbreak': { name: 'Rose Quartz', description: 'Rose Quartz is widely cherished for its ability to promote love and harmony, both within oneself and in relationships with others. This delicate pink gemstone is often referred to as the "stone of unconditional love," and is believed to enhance feelings of compassion, empathy, and forgiveness. It is said to open the heart chakra, facilitating deeper connections and emotional healing. Rose Quartz can help to nurture self-love and self-acceptance, creating a foundation for positive relationships and fostering a sense of inner peace. Whether used in personal meditation, placed in living spaces, or worn as jewelry, Rose Quartz is valued for its gentle, nurturing energy that encourages a loving and harmonious atmosphere.' },

    'The past': { name: 'Black Tourmaline', description: 'Black Tourmaline is renowned for its protective and grounding properties. This powerful stone is often used to shield against negative energies and electromagnetic radiation while providing a strong sense of stability and balance. Its grounding energy helps to anchor and center, making it an effective tool for maintaining emotional and spiritual equilibrium.' },

    'Being lied to': { name: 'Lapis Lazuli', description: 'Lapis Lazuli is renowned for its ability to promote truth and honesty. This deep blue gemstone is believed to enhance self-expression and integrity, encouraging open and authentic communication. It is often used to support personal growth and self-awareness, helping individuals align with their true selves and foster genuine connections with others.' },

    'Failure': { name: 'Citrine', description: 'Citrine is celebrated for its reputed ability to attract wealth and success. This vibrant yellow gemstone is often associated with abundance and prosperity, and is believed to stimulate financial growth and positive opportunities. Its energizing properties are thought to foster a mindset of confidence and optimism, making it a popular choice for those looking to enhance their career prospects and achieve their goals.' },

    'Change': { name: 'Moonstone', description: 'Moonstone is celebrated for its ability to promote new beginnings and facilitate change. This ethereal gemstone is believed to enhance intuition and emotional balance, guiding individuals through transitions and encouraging personal growth. Its gentle, shifting energy supports embracing change and exploring new opportunities with confidence and openness.' },
  };

  const determineBestCrystal = (answers) => {
    const crystalScores = {};

    Object.values(answers).forEach(answer => {
      const crystal = crystalMapping[answer];
      if (crystal) {
        if (!crystalScores[crystal.name]) {
          crystalScores[crystal.name] = { score: 0, description: crystal.description };
        }
        crystalScores[crystal.name].score += 1;
      }
    });

    let bestCrystal = null;
    let maxScore = 0;

    Object.entries(crystalScores).forEach(([crystal, { score, description }]) => {
      if (score > maxScore) {
        bestCrystal = { name: crystal, description };
        maxScore = score;
      }
    });

    return bestCrystal;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const bestCrystal = determineBestCrystal(answers);
    setResult(bestCrystal);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
            <Box
        sx={{
          backgroundColor: '#fbf5e8',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          marginTop: 8,
          textAlign: 'left',
          
        }}
      >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Find Your Best Crystal
        </Typography>
        {result ? (
          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              Your Recommended Crystal:
            </Typography>
            <Typography variant="h6" component="p">
              {result.name}
            </Typography>
            <Typography variant="body1" component="p">
              {result.description}
            </Typography>
          </Box>
        ) : (
          <>
            <FormControl component="fieldset" sx={{ marginBottom: '20px' }}>
              <FormLabel component="legend">{questions[currentQuestion].label}</FormLabel>
              <RadioGroup
                name={questions[currentQuestion].name}
                value={answers[questions[currentQuestion].name]}
                onChange={handleChange}
              >
                {questions[currentQuestion].options.map((option) => (
                  <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                ))}
              </RadioGroup>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBack}
                disabled={currentQuestion === 0}
                sx={{ marginTop: '20px' }}
              >
                Back
              </Button>
              {currentQuestion < questions.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  sx={{ marginTop: '20px' }}
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: '20px' }}
                >
                  Submit
                </Button>
              )}
            </Box>
          </>
        )}
      </Box>
      </Box>
    </Container>
  );
};

export default Quiz;