import '../css/home.css'
import logo from '../assets/logo.svg'
import rock from '../assets/icon-rock.svg'
import paper from '../assets//icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
import triangle from '../assets/bg-triangle.svg'
import rules from '../assets/image-rules.svg'
import close from '../assets/icon-close.svg'
import { useState } from 'react'

export default function Home() {

    const [rps, _setRps] = useState(['rock', 'paper', 'scissors'])

    const [score, setScore] = useState(0)
    const [choice, setChoice] = useState('')
    const [houseChoice, setHouseChoice] = useState('')
    const [resault, setResault] = useState('')
    
    
    const [startGame, setStartGame] = useState(false)
    const [rule, setRule] = useState(false)
    const [computerPicked, setComputerPicked] = useState(false)
    
    const startTheGame = (e: React.MouseEvent<HTMLElement>) => {
        setStartGame(true)
        let mychoice = ''
        

        for (let i = 0; i < rps.length; i++) {
            if (rps[i] === e.currentTarget.id) {
                setChoice(e.currentTarget.id)
                mychoice = e.currentTarget.id
            }
        }
        setTimeout(() => {
            
            const compPick = Math.floor(Math.random() * rps.length);
            const computerChoice = rps[compPick]
            setHouseChoice(computerChoice)
            setComputerPicked(true)
            
            if(mychoice === computerChoice) {
                setResault('Draw!')
            }
            else if((mychoice === 'rock' && computerChoice === 'paper') || (mychoice === 'paper' && computerChoice === 'scissors') || (mychoice === 'scissors' && computerChoice === 'rock')) {
                setResault('You Lose!')
            }
            else {
                setResault('You Win!')
                setScore(score+1)
            }
        }, 5000)
    }

    const reset = () => {
        setHouseChoice('')
        setChoice('')
        setStartGame(false)
        setComputerPicked(false)
    }

    return (  
        < >
            <div className="bg-gradient-to-b from-[#1f3756] to-[#141539] w-full py-8 px-4 flex flex-col md:pb-[4.1rem]">
                <div className="flex items-center justify-between p-3 py-4 rounded-lg score">
                    <div className='p-4 pl-1'> <img className='w-[120px]' src={logo} alt="logo" /> </div>
                    <div className='number text-[10px] flex flex-col justify-center items-center bg-[#f3fcff] h-fit px-7 py-4 rounded-lg font-extrabold'>SCORE <span className='text-[#575468] text-[2.3rem]'>{score}</span></div>
                </div>
                <div className={`flex justify-center w-full mt-8 rps `}>
                    <div className={`choices relative h-[303px] w-[320px] p-4 transition-all duration-1000 ${startGame? 'rotate-[360deg] scale-0': 'scale-100'}`}>
                        <div className='mt-5'><img src={triangle} alt="" /></div>
                        <div id='paper' onClick={(e) => startTheGame(e)} className='choice paper absolute top-0 left-0 bg-[#E6E6E6] rounded-full w-[120px] h-[120px] flex justify-center items-center'><img className='' src={paper} alt="paper" /></div>
                        <div id='scissors' onClick={(e) => startTheGame(e)} className='choice rock absolute top-0 right-0 bg-[#E6E6E6] rounded-full w-[120px] h-[120px] flex justify-center items-center'><img src={scissors} alt="rock" /></div>
                        <div id='rock' onClick={(e) => startTheGame(e)} className='choice scissors absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#E6E6E6] rounded-full w-[120px] h-[120px] flex justify-center items-center'><img src={rock} alt="scissors" /></div>
                    </div>
                </div>
                
                <div className={`mb-48 -mt-44 w-full flex`}>
                        <div className={`choicess relative bg-red-300 w-full md:w-[600px] md:m-auto `}>
                            
                            <div className='flex'>
                                <div id='paper' className={`choice absolute right-0 top-0 paper transition-all duration-1000 bg-[#E6E6E6] rounded-full w-[120px] h-[120px] flex justify-center items-center ${choice === 'paper'? 'delay-1000 scale-100': 'scale-0 none'}`}><img className='' src={paper} alt="paper" /></div>
                                <h1 className={`text-center absolute bottom-0 right-4 text-white transition-all duration-1000 w-fit ${choice === 'paper'? 'delay-1000 translate-y-[160px] opacity-100': 'translate-y-[240px]  opacity-0'}`}>your choice</h1>
                            </div>
                            <div className='flex'>
                                <div id='scissors'  className={`choice rock  right-0 absolute top-0 transition-all duration-1000 bg-[#E6E6E6] rounded-full w-[120px] h-[120px] flex justify-center items-center ${choice === 'scissors'? 'delay-1000 scale-100': 'scale-0 none'}`}><img src={scissors} alt="scissors" /></div>
                                <h1 className={`text-center absolute bottom-0 right-4 text-white transition-all duration-1000 w-fit ${choice === 'scissors'? 'delay-1000 translate-y-[160px] opacity-100': 'translate-y-[240px]  opacity-0'}`}>your choice</h1>
                            </div>
                            <div>
                                <div id='rock'  className={`choice scissors right-0 absolute top-0 transition-all duration-1000 bg-[#E6E6E6] rounded-full w-[120px] h-[120px] flex justify-center items-center ${choice === 'rock'? 'delay-1000 scale-100': 'scale-0 none'}`}><img src={rock} alt="rock" /></div>
                                <h1 className={`text-center absolute bottom-0 right-4 text-white transition-all duration-1000 w-fit ${choice === 'rock'? 'delay-1000 translate-y-[160px] opacity-100': 'translate-y-[240px]  opacity-0'}`}>your choice</h1>
                            </div>
                            
                            
                            <div>
                                <div id='empty'  className={` empty transition-all duration-500 absolute top-0 left-1 rounded-full w-[120px] h-[120px] flex justify-center items-center ${computerPicked === false && startGame === true? 'delay-1000 scale-100': 'scale-0 none'}`}></div>
                                <h1 className={`text-center absolute bottom-0 left-2 text-white transition-all duration-1000 w-fit ${computerPicked === false && startGame === true? 'delay-1000 translate-y-[160px] opacity-100': 'translate-y-[240px]  opacity-0'}`}>House picking...</h1>
                                <h1 className={`text-center absolute bottom-0 left-2 text-white transition-all duration-1000 w-fit ${computerPicked === true? 'delay-1000 translate-y-[160px] opacity-100': 'translate-y-[240px]  opacity-0'}`}>House picked!</h1>
                            </div>

                            {/* computer choices */}

                            <div className='flex'>
                                <div id='paper'  className={`choice paper absolute top-0 left-0  bg-[#E6E6E6] rounded-full w-[120px] h-[120px] flex justify-center items-center ${houseChoice === 'paper'? 'delay-1000 scale-100': 'scale-0 none'}`}><img className='' src={paper} alt="paper" /></div>
                            </div>
                            <div>
                                <div id='scissors' className={`choice rock absolute top-0 left-0 bg-[#E6E6E6] rounded-full w-[120px] h-[120px] flex justify-center items-center ${houseChoice === 'scissors'? 'delay-1000 scale-100': 'scale-0 none'}`}><img src={scissors} alt="scissors" /></div>
                            </div>

                            <div>
                                <div id='rock'  className={`choice scissors absolute top-0 left-0 bg-[#E6E6E6] rounded-full w-[120px] h-[120px] flex justify-center items-center ${houseChoice === 'rock'? 'delay-1000 scale-100': 'scale-0 none'}`}><img src={rock} alt="rock" /></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`w-fit m-auto text-center transition-all duration-500 text-white ${computerPicked === true? 'delay-[1.5s] opacity-100 translate-y-0 sm:-translate-y-36': ' translate-y-12 md:-translate-y-4 opacity-0'}`}>
                        <h1 className='text-3xl'>{resault}</h1>
                        <button onClick={reset} className={`mt-7 bg-[#E6E6E6] text-[#575468] font-bold text-sm py-2 px-8 rounded-lg`}>Play Again</button>
                    </div>
                    
                <div className="mt-12 text-center rules md:text-right md:mt-[0rem]">
                    <button onClick={() => setRule(true)} className=' rulesButton transition-all duration-500 rounded-lg px-9 py-2 text-[#E6E6E6] uppercase font-bold hover:bg-[#E6E6E6] hover:text-[#3b4363]'>Rules</button>
                </div>

                <div className={`fixed z-20 top-0 left-0 w-full transition-all duration-100 h-screen ${rule? 'visible': 'invisible'} rulesContainer`}>
                    <div className={`absolute flex flex-col min-w-[280px] transition-all duration-500 justify-center p-8 -translate-x-1/2 -translate-y-1/2 bg-white rulesImg top-1/2 left-1/2 ${rule? 'scale-100': 'scale-0'} `}>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl text-[#575468] font-bold'>RULES</h1>
                            <button onClick={() => setRule(false)}><img className='w-20px h-20px' src={close} alt="" /></button>
                        </div> 
                        <img className='mt-10' src={rules} alt="" />
                    </div>
                </div>
                
            </div>
        </>
    );
}