import { create } from "zustand";
import { AvatarStore } from "../interface";

export const useAvatarStore = create<AvatarStore>((set) => ({
    avatars:[
        'https://randomuser.me/api/portraits/men/1.jpg', 
    'https://randomuser.me/api/portraits/women/2.jpg', 
    'https://randomuser.me/api/portraits/men/3.jpg',
    ],
    addAvatar:(avatar) => set((state) => ({
        avatars:[...state.avatars,avatar]
    })),
    removeAvatar:(avatar) => set((state) => ({
        avatars:state.avatars.filter((existingAvatar) => existingAvatar !== avatar)
    }))
}))