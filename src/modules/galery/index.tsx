import { useEffect, useState } from 'react';
import { useStorageDb } from '../../shared/hooks/useStorageDb'
import { IGallery } from '../../shared/interfaces/IGallery';
import { TiPlus } from "react-icons/ti";
import * as C from './styles';

const Gallery = () => {
    const [dialog, setDialog] = useState(false);
    const [photos, setPhotos] = useState<IGallery[]>([]);
    const [valueURL, setValueURL] = useState('');
    const [valueDescription, setValueDescription] = useState('');

    const { getItem, setItem } = useStorageDb();
    const STORAGE_KEY = 'BG-GALLERY';
    
    const toggleDialog = () => {
        setDialog(!dialog)
    }

    const handleRemoveAllPhotos = () => {
        setPhotos([])
        setItem(STORAGE_KEY, JSON.stringify([]))
        toggleDialog()
    }
    
    const handleAddPhotos = () => {
        const StoragePhotos = getItem(STORAGE_KEY);
        
        if(StoragePhotos) {
            const photos = JSON.parse(StoragePhotos);
            const newPhoto = {
                url: valueURL,
                description: valueDescription
            }
            setValueDescription('')
            setValueURL('')
            setItem(STORAGE_KEY, JSON.stringify([newPhoto, ...photos]))
            setPhotos([newPhoto, ...photos])
            toggleDialog()

        } else {
            const newPhoto = {
                url: valueURL,
                description: valueDescription
            }
            setValueDescription('')
            setValueURL('')
            setItem(STORAGE_KEY, JSON.stringify([newPhoto]))
            setPhotos([newPhoto])
            toggleDialog()
        }

    }
    
    const handleChangesURL = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueURL(e.target.value)
    }
    
    const handleChangesDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueDescription(e.target.value)
    }

    useEffect(() => {
        const StoragePhotos = getItem(STORAGE_KEY);
        if(StoragePhotos) {
            setPhotos(JSON.parse(StoragePhotos))
        }
    }, [])

    return (
        <>
        <C.Shadow dialog={String(dialog)}>
            <article className={'shadow'} onClick={toggleDialog} >

            </article>

        </C.Shadow>
         

        <C.Container dialog={String(dialog)}>

        <aside className={'dialog'}>
            <div className={'dialog__tittle'}>
                <h2>Adicione uma Imagem</h2>
            </div>

            <div className={'dialog__features'}>
                <input type="text" className={'dialog__input'} onChange={handleChangesURL} value={valueURL} placeholder='Digite a URL da sua foto' />
                <input type="text" className={'dialog__input'} onChange={handleChangesDescription} value={valueDescription} placeholder='Digite a descrição da sua foto' />
                <button className={'dialog__button'} onClick={handleAddPhotos}>ADD PHOTOS</button>
                <button className={'dialog__button remove'} onClick={handleRemoveAllPhotos}>REMOVE ALL PHOTOS</button>

            </div>
        
        </aside>  

            <div className={'main'}>
                <header className={'header'}>
                    <h2 className={'header__tittle'}>Bagaggio Gallery</h2>
                    <button className={'header__button'} onClick={toggleDialog}><TiPlus size={30} /></button>
                </header>

            <div className={'gallery'}>
                <div className={'gallery__grid'}>

                    {photos.map(photo => (
                        <div key={photo.url} className={'gallery__item'}>

                            <img className={'gallery__image'} src={photo.url} alt={photo.description} />
                            <p className={'gallery__description'}>{photo.description}</p>

                        </div>
                    ))}

                </div>
            </div>

        </div>
        </C.Container>
        </>
    );
};

export default Gallery;