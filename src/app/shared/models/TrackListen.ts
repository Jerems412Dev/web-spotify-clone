import { Track } from "./Track";
import { User } from "./User";

export interface TrackListen {
    id: number;
    user: User;
    track: Track;
    listenedAt: string;
}
