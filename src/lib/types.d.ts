// TODO: Source from schema.org
/* 
    A template of relationships and connections between things,
    acting as the foundational building blocks out of which reality is constructed.
        
        ~ The atomic unit of reality,
            a dance of form and function,
                an ordered chaos, 
                    a silent music and rhythm senseable in all things. ~
*/
interface Pattern {
	id: string;
	name?: string;
	description: string;
	relationships: PatternRelationship[];
	tags: string[];
}

interface PatternRelationship {
	id: string;
	name?: string;
	description: string;
	patterns: Map<number, Pattern>;
}

interface Tag {
	id: string;
	name: string;
	description: string;
	relatedTags: Tag[];
}

/* 
    A structured arrangement of interconnected components or elements,
   that are adaptive, self-regulating, and interact in a coordinated way
   to achieve specific goals or functions such as a state of equilibrium.

    ~ A cosmic web of interconnections, a harmonious symphony 
        where each part sings in concert with the whole.
        The heartbeat of interconnectedness, 
        a labyrinth of cause and effect 
        where every pulse echoes through eternity. ~
*/
interface System {
	id: string;
	name?: string;
	description: string;
	patterns: Pattern[];
	relationships: SystemRelationship[];
	tags: Tag[];
}

interface SystemRelationship {
	id: string;
	name?: string;
	description: string;
	systems: Map<number, System>;
	patterns: Map<number, Pattern>;
	tags: Tag[];
}

/* 
    A complex system of communication-embodying concepts, logic, and meaning, 
    symbols, and rules that serves not just to communicate,
    but to serve as a bridge between minds, cultures, and lifetimes,
    and to shape and reflect the contours of human cognition and social organization.  

        ~ A river of sounds, signs, and symbols,
            navigating the landscape of human experience. 
            The tapestry of thought, a bridge between lifetimes. ~
*/
interface Language {
	id: string;
	name?: string;
	description: string;
	systems: System[];
	patterns: Pattern[];
	tags: Tag[];
}
