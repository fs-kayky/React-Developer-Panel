import * as C from './styles';
import { useEffect, useState } from 'react';
import { IMoveitUser } from '../../shared/interfaces/IMoveitUser';
import { useStorageDb } from '../../shared/hooks/useStorageDb';
import { challengesInformations } from './challenges';
import { IChallenges } from '../../shared/interfaces/IChallenges';

const Moveit = () => {

    const { getItem, setItem } = useStorageDb();

    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(60 * 25);
    const [minutes, setMinutes] = useState('25');
    const [seconds, setSeconds] = useState('00');
    
    const [xp, setXp] = useState(0);
    const [showTask, setShowTask] = useState(true);
    const [task, setTask] = useState<IChallenges>();
    const [challenges] = useState<IChallenges[]>(challengesInformations);
    const [percentageToNextLevel, setPercentageToNextLevel] = useState('0%');
    
    const [idTimeOut, setIdTimeOUt] = useState<number | null>(null);

    const [user, setUser] = useState<IMoveitUser>({
        photo: `${JSON.parse(getItem('BG-USER')).avatar_url}`,
        name: `${JSON.parse(getItem('BG-USER')).name}`,
        level: 1,
        currentExperience: 0,
        challengesCompleted: 0,
        xpToNextLevel: 64,
    });

    const handleTaskCompleted = () => {

        if (user.currentExperience + xp >= user.xpToNextLevel) {
            user.level++;
            user.currentExperience = (user.currentExperience + xp) - user.xpToNextLevel,
            user.xpToNextLevel = user.xpToNextLevel + 80
            user.challengesCompleted++;
        } else {
            user.challengesCompleted++;
            user.currentExperience += xp;
        }

        setItem('BG-MOVEIT', JSON.stringify(user));
        setShowTask(true);
        
    }


    const handleStartTimer = () => {
        if(time > 0) {
            setIsActive(true);
        } else {
            setTime(60 * 25);
            setIsActive(true);
        }
    }

    const resetTimer = () => {
        setIsActive(false);
        setMinutes('00');
        setSeconds('00');
        setTime(60 * 0.1);
    }

    const handleTimeChanges = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        setMinutes(formattedMinutes);
        setSeconds(formattedSeconds);
    }

    const generateNewChallenge = () => {
        const random = Math.floor(Math.random() * challenges.length);
        setXp(challenges[random].amount);
        setTask(challenges[random]);
    }

    const hanldeShowTask = () => {
        setShowTask(false);
        generateNewChallenge();
    }


    const Timer = () => {
        if (idTimeOut) {
            clearTimeout(idTimeOut);
        }

        // NAO MEXER!!!!!
        setIdTimeOUt(
            setTimeout(() => {
                if (!isActive && minutes == '00') {
                    setIsActive(false);
                    setMinutes('00');
                    setSeconds('00');
                }

                if (isActive) {
                    if (time >= 0) {
                        handleTimeChanges();
                        setTime(time - 1);
                    } else {
                        setIsActive(false);
                        hanldeShowTask();
                    }
                }
            }, 1000)
        )
    };


    useEffect(() => {
        const userData = getItem('BG-MOVEIT');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, [setUser]);

    useEffect(() => {
        Timer();

        if(user.xpToNextLevel > 0) {
            const percentage = (user.currentExperience / user.xpToNextLevel) * 100;
            setPercentageToNextLevel(`${percentage}%`);
        }


    }, [time, isActive, user.currentExperience, user.xpToNextLevel, showTask]);

    return (
        <>
            <C.XpBar totalxp={percentageToNextLevel} className={'xp__bar'}>
                <header className={'header'}>
                    <div className={'bar'}>
                        <div className={'bar__header'}>
                            <span>{user.currentExperience} xp</span>
                        </div>
                        <div className={'bar__body'}>
                            <div className={'bar__progress'} style={{ width: percentageToNextLevel }}></div>
                        </div>
                        <div className={'bar__footer'}>
                            <span>{user.xpToNextLevel} xp</span>
                        </div>
                    </div>

                </header>
            </C.XpBar>
            <C.Container>

                <main className={'main'}>
                    <div className={'grid'}>
                        <article className={'article__user'}>
                           <div className={'photo'}>
                                <img className={'user__photo'} src={`${user.photo}`} />
                            </div>
                            <div className={'info'}>
                                <h1 className={'user__name'}>{user.name}</h1>
                                <h1 className={'user__level'}>Level: {user.level} 
                                <img className={'user__level__image'} src='../../../public/icons/level.svg' />
                                </h1>
                                <h1 className={'user__task'}>Desafios Completos: {user.challengesCompleted}</h1>
                            </div>
                        
                        </article>

                        <article className={'article__timer'}>
                            <div className={'stopwatch'}>
                                <div className={'stopwatch__view'}>
                                    <div className={'stopwatch__number'}>
                                        {minutes[0]}
                                    </div>
                                    <div className={'stopwatch__number'}>
                                        {minutes[1]}
                                    </div>
                                    :
                                    <div className={'stopwatch__number'}>
                                        {seconds[0]}
                                    </div>
                                    <div className={'stopwatch__number'}>
                                        {seconds[1]}
                                    </div>
                                </div>

                                <div className={'stopwatch__buttons'}>
                                    <button className={'stopwatch__button'} onClick={handleStartTimer}>
                                        Iniciar um ciclo
                                    </button>

                                    <button className={'stopwatch__button'} onClick={resetTimer}>
                                        Resetar o timer
                                    </button>
                                </div>

                            </div>

                        </article>

                        <aside className={'aside'}>
                            <h1>
                                {showTask ?
                                    <C.LandTask>
                                        <h1 className={'task__tittle'}>Finlize um ciclo para receber um desafio</h1>
                                        <img className={'task__image'} src='../../../public/icons/level-up.svg' />
                                        <h3 className={'task__subtittle'}>Avance de level completando desafios.</h3>

                                    </C.LandTask>
                                    :
                                    <C.Desafio>
                                        <header className={'task__header'}>
                                            <h3 className={'task__xp'}>Ganhe {xp} xp</h3>
                                        </header>

                                        <main className={'task__body'}>
                                            <img className={'task__image'} src='../../../public/icons/body.svg' />
                                            <h1 className={'task__tittle'}>Novo desafio</h1>
                                            <p className={'task__description'}>{task?.description}</p>

                                            <div className={'task__buttons'}>
                                                <button className={'task__button green'} onClick={handleTaskCompleted}>Completei</button>
                                                <button className={'task__button red'} onClick={() => setShowTask(true)}>Falhei</button>
                                            </div>

                                        </main>

                                    </C.Desafio>}
                            </h1>
                        </aside>
                    </div>
                </main>


            </C.Container>
        </>
    );
};

export default Moveit;