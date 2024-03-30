import React, { useState, useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GalleryContainer from '../containers/GalleryContainer';
import NewPhotoContainer from '../containers/NewPhotoContainer';

const Tab = createBottomTabNavigator();

export default function GalleryPage() {
    const [photos, setPhotos] = useState([]);

    function savePhotos(photoUri) {
        photos.push(photoUri);
        setPhotos(photos);
    }

    return (
        <Tab.Navigator>
            <Tab.Screen name="Galeria">
                {() => <GalleryContainer photos={photos} />}
            </Tab.Screen>
            <Tab.Screen name="Nova Foto">
                {() => <NewPhotoContainer action={savePhotos} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
