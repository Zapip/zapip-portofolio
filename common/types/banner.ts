export interface Banner {
    /** Full name shown in hero & <title>. */
    name?: string;
    /** Nickname shown in hero & <title>. */
    nickname?: string;
    /** Professional role / title. */
    role?: { en: string; id: string };
    /** Location string. */
    location?: { en: string; id: string };
    /** Top skills shown as tags. */
    skills?: string[];
    /** Short tagline shown under the headline. */
    tagline: { en: string; id: string };
    /** Status pill copy. */
    status?: { en: string; id: string };
    /** Short description shown under the tagline. */
    description?: { en: string; id: string };
    information?: { en: string; id: string };

}