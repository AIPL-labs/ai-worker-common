export type TavernCardV2<E extends Record<string, any> = Record<string, any>> = {
    spec: "chara_card_v2";
    spec_version: "2.0";
    data: Partial<{
        name: string;
        description: string;
        personality: string;
        scenario: string;
        first_mes: string;
        mes_example: string;
        creator_notes: string;
        system_prompt: string;
        post_history_instructions: string;
        alternate_greetings: Array<string>;
        character_book?: CharacterBook;
        tags: Array<string>;
        creator: string;
        character_version: string;
        extensions: E;
    }>;
};
/**
 * ? as in `name?: string` means the `name` property may be absent from the JSON
 * (aka this property is optional)
 * OPTIONAL PROPERTIES ARE ALLOWED TO BE UNSUPPORTED BY EDITORS AND DISREGARDED BY
 * FRONTENDS, however they must never be destroyed if already in the data.
 *
 * the `extensions` properties may contain arbitrary key-value pairs, but you are encouraged
 * to namespace the keys to prevent conflicts, and you must never destroy
 * unknown key-value pairs from the data. `extensions` is mandatory and must
 * default to `{}`. `extensions` exists for the character book itself, and for
 * each entry.
 **/
export type CharacterBook = {
    name?: string;
    description?: string;
    scan_depth?: number;
    token_budget?: number;
    recursive_scanning?: boolean;
    extensions: Record<string, any>;
    entries: Array<{
        keys: Array<string>;
        content: string;
        extensions: Record<string, any>;
        enabled: boolean;
        insertion_order: number;
        case_sensitive?: boolean;
        name?: string;
        priority?: number;
        id?: number;
        comment?: string;
        selective?: boolean;
        secondary_keys?: Array<string>;
        constant?: boolean;
        position?: "before_char" | "after_char";
    }>;
};
//# sourceMappingURL=TavernCardv2.1.d.ts.map