import { 
  Shield, 
  Zap, 
  Sword, 
  Truck, 
  Cpu, 
  Book, 
  Ruler, 
  Dna, 
  Wrench, 
  Crosshair, 
  Database, 
  FileText,
  Star,
  Activity
} from 'lucide-react';

export interface DataCategory {
  id: string;
  title: string;
  icon: any;
  description: string;
}

export const CATEGORIES: DataCategory[] = [
  { id: 'classes', title: 'Class', icon: Shield, description: 'Cybertronian roles and lineages.' },
  { id: 'feats', title: 'Beats', icon: Star, description: 'Specialized combat and utility maneuvers.' },
  { id: 'skills', title: 'Skills', icon: Activity, description: 'Core proficiencies and technical abilities.' },
  { id: 'magic', title: 'Magic', icon: Zap, description: 'Spark-based abilities and Energon manipulation.' },
  { id: 'experience', title: 'Experience Point Chart', icon: Database, description: 'Progression and leveling metrics.' },
  { id: 'size', title: 'Size Chart', icon: Ruler, description: 'Scale classifications and combat modifiers.' },
  { id: 'dictionary', title: 'Dictionary Terms', icon: Book, description: 'Cybertronian terminology and linguistics.' },
  { id: 'glossary', title: 'Glossary', icon: FileText, description: 'Technical definitions and slang.' },
  { id: 'race', title: 'Race', icon: Dna, description: 'Major factions, tribes, and species lore.' },
  { id: 'equipment', title: 'Equipment', icon: Wrench, description: 'Utility gear, internal systems, and tech-suits.' },
  { id: 'weapons', title: 'Weapons', icon: Sword, description: 'Offensive armaments and ballistics.' },
  { id: 'vehicles', title: 'Vehicles', icon: Truck, description: 'Core chassis specifications and mecha frames.' },
  { id: 'prestige', title: 'Prestige Classes', icon: Star, description: 'Elite ranks and legendary titles.' },
  { id: 'technical', title: 'Technical Data', icon: Cpu, description: 'Deployment systems, shop services, and system rules.' },
];

export const DATA = {
  classes: [],
  rules: [
    {
      name: 'Tier-Blindness (The Perception Gap)',
      technical_specifications: 'Units do not perceive entities two or more tiers below them as valid combatants. They are treated as environmental terrain or atmospheric interference.',
      interaction_penalty: 'Automatic Failure on Spot/Search for units 2 tiers lower.',
      damage_gate: 'Hardness ignores all damage from units 2+ tiers lower.',
      description: 'A Titan cannot effectively target or even see a human or a scout-class unit. To the Titan, these units are too small for their targeting sensors to lock onto.'
    },
    {
      name: 'Perspective Hierarchy',
      technical_specifications: 'Macro-Physics scaling for multiversal conflict.',
      tier_0: 'Micro (Humans / Minicons)',
      tier_1: 'Standard (Voyagers / Leaders / Combiners)',
      tier_2: 'Titan (City-Bots / Fortress Units)',
      tier_3: 'Cosmic (Primus / Unicron)',
      rule_of_two: 'Tier 3 blind to Tier 1. Tier 2 blind to Tier 0.'
    },
    {
      name: 'Alt-Mode Shell Integration',
      technical_specifications: 'When transformed, the Cybertronian gains the Hit Points and Hardness associated with their vehicle class.',
      hp_pool: 'Spark HP + Shell HP (Ablative)',
      hardness: 'Use Shell Hardness or Natural Armor (whichever is higher)',
      recovery: 'Repairing the Shell requires a Craft (Mechanical) check, DC 20.',
      description: 'Damage is first subtracted from the Shell HP. Once Shell HP reaches 0, the unit is forced back into Robot Mode and any remaining damage carries over to the Spark HP.'
    },
    {
      name: 'Size Scaling Math',
      technical_specifications: 'Recalculated for d20 Modern/Future parity.',
      huge: '-2 Defense/Attack, -8 Hide, +8 Grapple',
      gargantuan: '-4 Defense/Attack, -12 Hide, +12 Grapple',
      colossal: '-8 Defense/Attack, -16 Hide, +16 Grapple',
      shell_hp_bonus: 'Large (+40-60), Huge (+80-150), Gargantuan (+200-300), Colossal (+500+)'
    },
    {
      name: 'Combat Resolution',
      technical_specifications: 'Units must be within one Tier of each other to engage in standard d20 combat. Beyond that, use Environmental Hazard rules.'
    },
    {
      name: 'The Titan Rule (External)',
      technical_specifications: 'Titans are immune to all external damage from any source smaller than Titan scale.',
      exceptions: 'Damage can only be dealt by another Titan or Plot-Device weaponry (e.g., Orbital Strikes, Matrix).',
      superficial_hits: 'Smaller units can interact with the exterior (destroying turrets) but cannot reduce actual HP.'
    },
    {
      name: 'The Titan Rule (Internal)',
      technical_specifications: 'To destroy a Titan, smaller units must infiltrate the interior. The Titan is treated as a Combat Zone/Map.',
      secure_sites: 'Critical internal hubs (Spark Chamber, T-Cog, Power Core).',
      destruction: 'Once Secure Sites are destroyed, the Titan is defeated or forced into stasis lock.'
    },
    {
      name: 'Scaling Grapples',
      technical_specifications: 'Epic units are the only single-unit bots capable of effectively using Grapple/Trip against a Combiner without automatic failure.'
    },
    {
      name: 'Alt Mode Transformation Rules',
      technical_specifications: 'Dimensions must remain realistic (No Mass Shifting).',
      size_constraint: 'Alt Mode cannot be more than half its size bigger or smaller than Robot Mode (± 50% height/mass).',
      example: 'Medium Frame (14.5 ft) has Robot Mode height range of 7.25 ft to 21.75 ft.'
    },
    {
      name: 'Master Scale Summary',
      technical_specifications: 'Attacker vs Target scale matrix.',
      cosmic_vs_bot: 'Cannot Target',
      titan_vs_human: 'Cannot Target',
      bot_vs_cosmic: '-20 to Hit',
      bot_vs_titan: '-10 to Hit',
      precision_rule: 'Only Tiny/Small bots can target humans directly. Medium+ must use Stomp or Area Weapons.'
    },
    {
      name: 'The Spark & Nexus Energy',
      technical_specifications: 'The Spark is the life force or soul. Nexus Energy is the invisible current powering mechamorph systems.',
      strong_spark: 'Add Constitution modifier to -10 to determine point of death.',
      nexus_sensing: 'Can be sensed by Savants or specialized human tech.'
    },
    {
      name: 'Nucleon Infusion',
      technical_specifications: 'State where a mechamorph is infused with rogue energy.',
      effect: 'Locked into primary form but significantly boosts physical power.'
    },
    {
      name: 'Zero Signature',
      technical_specifications: 'State achieved by Biomorphs.',
      effect: 'Register as purely biological to radars and sensors.'
    },
    {
      name: 'The Biological & Mechanical Foundation',
      technical_specifications: 'The Headmaster Bond: Human and Transformer are a single unit.',
      robot_mode: 'Chassis is Pilot (Physical); Human is Gunner (Mental).',
      alt_mode: 'Human is Driver (Finesse); Chassis is Active Support (Sensors).',
      million_year_context: 'Hardware is ancient. T-Cogs fail at 15% HP; Stasis Lock is primary survival.',
      psychic_bond: 'Permanent Quarter Sync connection for tracking through interference.'
    },
    {
      name: 'Health, Stasis, and Failure States',
      technical_specifications: 'Critical thresholds for Cybertronian frames.',
      t_cog_lock: 'At 15% HP, T-Cog seizes. Locked in Robot Mode. Speed halved, -4 penalty to physical actions.',
      stasis_lock: 'At 0 HP, unit goes offline but is Stable. Requires Repair or Energon jump-start.',
      destruction: 'At -10 HP, hardware is totaled beyond repair.',
      auto_eject: 'If Human takes Critical Hit, Chassis snaps to Alt-Mode and ejects Human.'
    },
    {
      name: 'Scaling & Power Limits',
      technical_specifications: 'Epic Chassis (9-inch scale) and Master limits.',
      master_limit: 'Epic Chassis supports 3 connections (Limb-plugs/Head).',
      energy_drain: 'Connecting a 4th Master causes constant non-lethal damage to all connected players.'
    },
    {
      name: 'The Stats (Abilities)',
      technical_specifications: 'Spark (Soul) vs Frame (Body) attributes.',
      spark_stats: 'INT (Tactics), WIS (Scouting), CHA (Leadership/Nudge).',
      frame_stats: 'STR (Size-based), DEX (Size-based, capped by Shell), CON (Internal Integrity).'
    },
    {
      name: 'The Law of Titan Invulnerability',
      technical_specifications: 'An absolute physical and energetic barrier protecting Macro-Scale entities.',
      bedrock_law: 'Titans serve as the bedrock of the world; the planet\'s surface is structurally indestructible.',
      environmental_vs_structural: 'Standard warfare causes environmental scarring only. It cannot breach the Structural Hull.',
      the_epic_breach: 'Only Epic Class status (via Matrix or Super Mode) possesses the authority to damage a Titan\'s hull.',
      engagement_matrix: 'Leader/Below: Immune. Epic Class: Vulnerable. Titan Class: Vulnerable. Cosmic: Absolute.'
    },
    {
      name: 'Cosmic Sovereignty',
      technical_specifications: 'The fundamental state of World-Scale entities.',
      planetary_stasis: 'Cosmic entities exist as planets in Stasis (habitable) or Awake (sentient force).',
      the_conduit: 'The Matrix of Leadership acts as a Communicator/Transmitter for the planet\'s will.',
      the_reformat: 'Control over non-Matrix bearers requires physical reformatting, often resulting in Reformatted Insanity (e.g., Galvatron).'
    },
    {
      name: 'The "Cough" (Dark Energy Filter)',
      technical_specifications: 'A physical hazard that the Human Relic is specifically designed to filter.',
      effect: 'Human acts as bio-filter. Fortitude Save (DC 15) or take "The Cough" (-2 DEX/CON penalties). Transformer remains uncorrupted.',
      lore: 'Establishing the necessity of the Headmaster bond as a survival mechanism.'
    },
    {
      name: 'Action Costs (Energon/AP)',
      technical_specifications: 'Expenditure of Action Points to fuel high-output systems.',
      melee_move: '0 AP (Standard fuel)',
      heavy_weapon_gimmick: '1 AP per use',
      transform_non_jumpstarter: '1 AP',
      chokon_boost: '1 AP',
      maintain_gestalt: '1 AP per minute (high stress)'
    },
    {
      name: 'The "Locked Cog" (25% HP Threshold)',
      technical_specifications: 'Transformation Cog seizes due to frame damage.',
      check: 'Fortitude Save (DC 15) required to transform at or below 25% HP.',
      failure: 'Action wasted; Transformer remains in current mode.'
    },
    {
      name: 'The 6th Member (Gestalt Cog)',
      technical_specifications: 'Command and Control (C2) Suite for Combiners.',
      function: 'Enables Stacked BAB. Without it, limited to highest single BAB.',
      destruction: 'If 6th member reduced to 0 HP, C2 benefits lost immediately.'
    },
    {
      name: 'The "Master" Link (DEX and BAB)',
      technical_specifications: 'Combat math for piloted/bonded units.',
      ranged: '1d20 + BAB (Stacked) + DEX (Frame) + Size Mod',
      melee: '1d20 + BAB (Stacked) + STR (Frame) + Size Mod',
      human_bonus: 'Human pilot provides Feats as Competence Bonuses to the Transformer.'
    },
    {
      name: 'Separating and Damage',
      technical_specifications: 'Rules for Gestalt disassembly.',
      division: 'Current total HP divided by number of participants upon separation.',
      massive_damage: 'Exceeding threshold forces Fort save or reduced to -1 HP immediately.'
    },
    {
      name: 'Momentum Rule',
      technical_specifications: 'Physics of stasis in motion.',
      effect: 'If Driver enters Stasis Lock in Alt-Mode, vehicle maintains speed/heading until external crash or override.'
    },
    {
      name: 'The "Herbie" Autonomy',
      technical_specifications: 'Chassis sentience when pilot is unavailable.',
      effect: 'Chassis can drive/act on its own with reduced efficiency if Human is incapacitated.'
    },
    {
      name: 'Binary Bond (The Data-Bridge)',
      technical_specifications: 'Neural Data-Bridge established upon suit docking.',
      awareness: 'Bi-Directional Awareness: shared consciousness; cannot be surprised unless both are.',
      overclock: 'Processing Overclock: Host can offload mental tasks (Skill checks as Free Action).',
      risk: 'Feedback Loop: Critical hit to host requires DC 20 Fort save or Nebulon is stunned.'
    }
  ],
  classes: [
    { 
      name: 'Animech Pathfinder', 
      technical_specifications: 'Vigilant scouts dedicated to tribe safety. Masters of passing through areas unnoticed.',
      role: 'Reconnaissance and advance warning.'
    },
    { 
      name: 'Animech Primal', 
      technical_specifications: 'Ancient warriors taking forms of extinct creatures like dinosaurs.',
      special: 'Battle Frenzy: Instinct-driven, lose rational speech, gain combat bonuses.'
    },
    { 
      name: 'Animech Savant', 
      technical_specifications: 'Mystical elders who manipulate Nexus Energy.',
      special: 'Spark Sustenance: Can sustain spark even after physical body death.'
    },
    { 
      name: 'Biomorph', 
      technical_specifications: 'Infiltrators assuming a techno-organic cocoon to pass perfectly as human.',
      special: 'Mimic nuances like breathing and blinking for deep cover.'
    },
    { 
      name: 'Jaegger', 
      technical_specifications: 'Hunters, law enforcers, or bounty hunters dedicated to pursuing other mechamorphs.'
    },
    { 
      name: 'Mythic Formed', 
      technical_specifications: 'Rare mechamorphs with legendary forms like Dragons, Griffins, or Chimeras.'
    },
    { 
      name: 'Tyrant Infiltrator', 
      technical_specifications: 'Shadowy masters of sabotage and espionage. Wild cards trusted by no one.'
    },
    { 
      name: 'Tyrant Sinister', 
      technical_specifications: 'Cunning inventors of terrifying war devices. Pursue private agendas in secure labs.'
    },
    { 
      name: 'Tyrant Warmaster', 
      technical_specifications: 'Carnage-seeking lieutenants. Prefer hand-to-hand combat; no tolerance for weakness.'
    },
    { 
      name: 'The Tyrant (Advanced Class)', 
      technical_specifications: 'A leader who rules through strength and presence.',
      requirements: 'Intimidate 6 ranks, Base Attack Bonus +3, Power Attack.',
      class_features: 'Iron Fist (1d10 unarmed), Aura of Fear, Command Voice.'
    },
    { 
      name: 'The Tech Head (Advanced Class)', 
      technical_specifications: 'Ultimate support units. Manipulate the digital landscape.',
      requirements: 'Computer Use 6 ranks, Knowledge (Tech) 6 ranks, Craft (Electronic) 6 ranks.',
      class_features: 'Master Scanner, System Override, Jury-Rig.'
    },
    { 
      name: 'Dreadnought (Advanced Class)', 
      technical_specifications: 'Ultimate front-line combatant. Focuses on survivability and fortification destruction.',
      requirements: 'Base Attack Bonus +3, Power Attack, Cleave.',
      class_features: 'Reinforced Chassis (DR 3/-), Unstoppable Charge, Siege Might.'
    },
    { 
      name: 'Infiltrator (Advanced Class)', 
      technical_specifications: 'Specializes in getting behind enemy lines undetected.',
      requirements: 'Hide 6 ranks, Move Silently 6 ranks, Stealthy feat.',
      class_features: 'Ghost in the Machine, Sneak Attack +2d6, Evasion.'
    },
    { 
      name: 'Mecha Ace (Advanced Class)', 
      technical_specifications: 'The vehicle is an extension of the self.',
      requirements: 'Pilot 6 ranks, Mecha Operation feat.',
      class_features: 'Intuitive Flight, Evasive Maneuvers, Personal Link.'
    },
    {
      name: 'The Classes (Bot Programming)',
      technical_specifications: 'Basic programming roles based on d20 archetypes.',
      warrior: 'Strong Hero. High STR, melee focus. Best for Dinobots.',
      seeker_scout: 'Fast Hero. High DEX, speed focus. Best for Light Shells.',
      defender: 'Tough Hero. High HP/Hardness. Best for Heavy Shells.',
      scientist: 'Smart Hero. High Skill Points. Best for Cassette Hubs.',
      medic_tracker: 'Dedicated Hero. High WIS. Best for Scouts/Medics.',
      commander: 'Charismatic Hero. High CHA. Best for Matrix Bearers.'
    }
  ],
  prestige: [
    { 
      title: 'Exile Champion', 
      technical_specifications: 'Renowned heroes forged in conflict. Role models for younger generations.'
    },
    { 
      title: 'Exile Omega', 
      technical_specifications: 'Destined leaders carrying a Legacy Spark.',
      special: 'Passes memories and knowledge to the next leader upon falling.'
    },
    { 
      title: 'Omega Guardian (Colossal Scale)', 
      technical_specifications: 'Rare and ancient class for the largest Cybertronians. Living deterrents.',
      requirements: 'Character Level 12+, Heroic Surge feat.',
      class_features: 'Planetary Defense (Hardness +10), Absolute Mass, Rocket Fist.'
    },
    { 
      title: 'Beast Warframe', 
      technical_specifications: 'Masters of organic or mechanical animal alt-modes.',
      requirements: 'Survival 8 ranks, Jump 6 ranks, Animal Affinity feat.',
      class_features: 'Feral Instincts (Scent/Low-Light), Natural Weaponry (2d6 claws), Adaptive Carapace (DR 5/-), Apex Predator (Pounce).'
    },
    { 
      title: 'Pretender', 
      technical_specifications: 'Infiltrators utilizing outer shell technology.',
      requirements: 'Disguise 10 ranks, Bluff 6 ranks, Deceptive feat.',
      class_features: 'Dual Shell (50% HP buffer), Ghost Signal (Sensor immunity), Shell Detachment (Decoy/Turret), Regenerative Layer.'
    },
    { 
      title: 'Triple / Six Changer', 
      technical_specifications: 'Masters of multi-mode architecture.',
      requirements: 'Pilot 8 ranks, Drive 8 ranks, Skill Emphasis (Pilot).',
      class_features: 'Fluid Shift (Swift Action transform), Combat Versatility, Reactive Reconfiguration, Master of Form (+2 Physical Stats).'
    },
    { 
      title: 'Gestalt (Combiner)', 
      technical_specifications: 'The ultimate expression of team synergy.',
      requirements: 'Diplomacy 8 ranks, Sense Motive 6 ranks, Teamwork feat.',
      class_features: 'Unified Vitality (Summed HP), Mass Increase (Colossal size), Synergistic Strike (+1d6 per limb), Neural Stability (+5 Will).'
    },
    { title: 'Prime', requirement: 'Matrix of Leadership', bonus: 'God-like stats and immortality.' },
    { 
      title: 'Seeker', requirement: 'Aerial Alt-Mode + Elite Rank', bonus: 'Unmatched air superiority.' },
    { 
      title: 'Master Suit Pilot', 
      technical_specifications: 'Elite humanoid mastery of Tier IV Nanomorphic interface.',
      requirements: 'Hardware: Nanomorphic Master Suit (Tier IV), BAB +3, Pilot 6, Drive 6, Tumble 4, Feat: Vehicle Expert.',
      class_features: 'Improved Skill Bridge (+2 bonus), AC Bonus, Reactive Sync (Use Tumble for Def), Overdrive Sync (Extra action for 1 AP).'
    },
    { 
      title: 'Headmaster', 
      technical_specifications: 'Mastery of shared neural link and mental fortress shielding.',
      requirements: 'Hardware: Headmaster Modification, Character Level 5+.',
      class_features: 'Shared Awareness (Cannot be flanked; +4 Listen/Spot), Neural Overclock (+2 INT bonus while docked).'
    },
    { 
      title: 'Powermaster Engine-Steward', 
      technical_specifications: 'Mastery of engine-output optimization and forced transformation.',
      requirements: 'Hardware: Powermaster Modification, Character Level 5+.',
      class_features: 'Forced Transformation (Shift without engine for 2x Intergon), Fuel Injection (+10ft Speed, +2 Damage).'
    },
    { 
      title: 'Titan Master Commander', 
      technical_specifications: 'Mastery of autonomous AI management and Legendary Power unlocking.',
      requirements: 'Hardware: Titan Master Modification, Character Level 5+.',
      class_features: 'AI Synchronization (+2 Atk/Def in autonomous mode), Legendary Manifestation (Unlocks 5th Power-Up).'
    },
    { 
      title: 'Targetmaster', 
      technical_specifications: 'Mastery of synchronized targeting and ballistic coordination.',
      requirements: 'Hardware: Targetmaster Modification, Character Level 5+.',
      class_features: 'Point-Blank Sync (Ignore "Firing into Melee" penalty), Critical Link (+1 Critical Threat range).'
    },
    {
      title: 'The Bestial Spark',
      technical_specifications: 'Prestige evolution for beast frames at 10-level milestones.',
      trunk: 'Transmetals (Level 10): Mechanical beast + vehicle mode. Hardness 5, Vacuum/Rad Immunity.',
      branch_a: 'Fuzer (Hybrid): Dual-Anatomy (2 animals), Multi-Attack, -2 Charisma.',
      branch_b: 'Transmetals 2 (Supernatural): Fast Healing 5, Mutant Feats, lose Third Mode.',
      branch_c: 'The Mutant (Stealth): Two beast modes, zero electronic signature (+10 Stealth), lose Robot Mode.'
    }
  ],
  gimmicks: [
    {
      name: 'The Matrix of Leadership (The 13-in-1 Artifact)',
      technical_specifications: 'A multi-core vessel containing the digital signatures of the original 13 Primes.',
      reformat_stats: 'Immediate reformat to Leader Class: STR 24, CON 24, DEX 18, AC 25, Size: Large, Hit Die: d20.',
      prime_dominance: 'Commune once per Long Rest to allow one of the 13 Spirits to become dominant, unlocking unique Level 20 abilities.',
      spirits: 'Prima (Star Saber), Vector (Time), Solus (Forge), Micronus (Link), Alchemist (Transmute), Nexus (Combine), Onyx (Beast), Amalgamous (Shift), Quintus (Life), Liege (Manipulate), Megatronus (Requiem), 13th (Burst), Alpha Trion (Quill).',
      consensus_rule: 'Selfish acts force DC 30 Will Save or Matrix goes inert.'
    },
    {
      name: 'Compendium of Matrix Artifacts',
      technical_specifications: 'Unique sentient artifacts dictating physical and metaphysical identity.',
      variants: [
        { type: 'G1 (The Beacon)', bonus: 'Divine Authority (+10 CHA); +5 Morale to allies.', upgrade: 'The Purifier (20d10 Holy Blast / Mass Res).' },
        { type: 'Justice (The Sovereign)', bonus: 'Symmetric Resonance (Share AC/Saves with ally).', upgrade: 'God-Fire Fusion (Merge into Epic entity).' },
        { type: 'Power (The Colossus)', bonus: 'Minicon Catalyst (Double Minicon damage).', upgrade: 'The Colossus (Size: Huge, ADR 15).' },
        { type: 'Combination (The Nexus)', bonus: 'Tactical Parallelism (Never lose DEX to AC).', upgrade: 'Grand Force (4 autonomous drone limbs).' },
        { type: 'Galaxy (The Vanguard)', bonus: 'Planetary Interface (Read planet history; ignore terrain).', upgrade: 'Galaxy Suit (100ft Fly, Galaxy Cannon).' },
        { type: 'War (The Architect)', bonus: 'Industrial Overclock (Ignore reload/cooling; double structure damage).', upgrade: 'World-Speaker (Summon environmental hazards).' },
        { type: 'Origin (The Life-Giver)', bonus: 'Primal Restoration (Give life to machines).', upgrade: 'Divine Reformat (+10 to all ally stats).' },
        { type: 'Aligned (The Sage)', bonus: 'Archive of the 13 (+20 Knowledge; force enemy rerolls).', upgrade: 'The Star Saber (Energy blade targets Touch AC).' }
      ]
    },
    {
      name: 'The Matrix Pairing (The Handshake)',
      technical_specifications: 'The Matrix is a sentient Spiritual Computer that pairs with a bearer based on Spark Frequency.',
      handshake_rule: 'DC 25 Charisma Check (Force of Personality). +10 bonus if bot has Conviction feat or Pure Allegiance.',
      pairing_result: 'Matrix Pairs with bot until death or voluntary passing.',
      reformatting: 'Rodimus Shift: Bearer grows one Frame Size permanently. Gains Base STR and Bonus HP of new size; keeps original DEX. Alt-mode evolves.',
      ancestral_link: 'Ghost Pilot: Gain Integrated AI gimmick for free (+15 Knowledge bonus). AI can take a Standard Action to Help.',
      energon_synergy: 'AP Sharing: Action Points refill to max at start of combat. Spend 1 AP to grant allies within 60ft a +4 bonus to next Attack or Save.'
    },
    {
      name: 'AI Drone (The Autonomon)',
      technical_specifications: 'Sparkless shells directed by a sentient mind.',
      controller: 'Link to drones equal to Charisma modifier. See/hear through drones within 1 mile.',
      action_economy: 'Commanding is a Move Action. Spend 1 AP for 3 rounds of autonomous action using controller\'s BAB.',
      types: 'Trailer/Support (Extra slots), Swarm (Scouting/Distraction).'
    },
    {
      name: 'Powerlinx (Binary Combination)',
      technical_specifications: 'Two independent bots merge into a single superior unit.',
      rule: 'Two bots of same size spend 1 AP each and Full-Round Action to merge.',
      stats: 'Top (STR/Attack), Bottom (Speed/AC). Combined unit gets 2 Move Actions and 1 Attack Action. Shared HP pool.',
      separation: 'If dropped to 0 HP, bots separate, land Prone, and have 1 HP remaining.'
    },
    {
      name: 'Cyber Key (The Planet-Trigger)',
      technical_specifications: 'Physical data-chip unlocking hidden high-output systems.',
      activation: 'Free Action. Spend 1 AP.',
      effect: 'Bonuses for 3 rounds: Offense (+2 dice steps), Defense (DR 10/- or +5 Def), Utility (Triple speed).'
    },
    {
      name: 'Call of the Primes (Titan Authority)',
      technical_specifications: 'Matrix Bearer ability to command Titans.',
      designation: 'Standard Action to designate target up to 1 mile away. Spend 1 AP.',
      result: 'Titan fires primary cannons at designated point using Prime\'s BAB and Precision.',
      damage: 'Titan-Scale Damage (20d12+) in 60ft Splash Radius.',
      nudge: 'Instantly wake dormant Titans; Titan prioritizes protection of Matrix bearer.'
    },
    {
      name: 'The Primitive Spark (The Call of the Primes)',
      technical_specifications: 'Beast-mode bots (Dinobots, Predacons) with primal energy signatures.',
      the_nudge: 'Automatically wake from stasis when "The Call" is broadcast. No AP cost.',
      the_compulsion: 'DC 20 Will Save to ignore; following the Call grants +4 Morale bonus.',
      primal_immunity: 'Immune to Energon Siphoning; Spell Resistance 25 against energy drain.',
      primal_overdrive: 'Spend 1 AP for Primal Rage (5 rounds): +4 STR, DR 5/-, -2 Defense.'
    },
    {
      name: 'Triple Changing (Level 11+)',
      technical_specifications: 'Sequence-based shifting between Robot and two distinct Alt-modes.'
    },
    {
      name: 'Six-Shot / Multi-Changer (Level 11+)',
      technical_specifications: 'Access to 5 distinct Alt-modes at will. Subject to "Fragile" flaw.'
    },
    {
      name: 'Cassette Deployment Hub',
      technical_specifications: 'Internal bay for Tiny sentient cohorts (Cassettes).'
    },
    {
      name: 'Targetmaster Gloves',
      technical_specifications: 'Small bot attaches to hand as a weapon.',
      benefit: '+2 Hit, +4 Spot, AP damage overcharge.'
    },
    {
      name: 'Parts-former (Mech Suit)',
      technical_specifications: 'Bot dismantles into a sentient suit for an ally.',
      benefit: 'Grants Clumsy Flight, AC bonus, and integrated arm guns.'
    },
    {
      name: 'Evolution (Temporary)',
      technical_specifications: 'Spend 2 AP to grow one frame size larger for 10 rounds.'
    },
    {
      name: 'The Great Stasis',
      technical_specifications: 'Titans remain as landmarks until "Nudged" awake by Matrix or Cosmic signal.'
    },
    {
      name: 'Mini-Con (The Power-Link)',
      technical_specifications: 'Tiny/Small bots that attach to hosts to grant a Feat, Skill, or FX Ability for 3 rounds.',
      passive_bonus: '+2 Equipment bonus to Defense via sensory link.',
      activation: 'Spend 1 AP to trigger ability; 3-round duration followed by cooldown.',
      targeting: 'Human-Scale Precision; +10 Hide checks against Titan-scale sensors.'
    },
    {
      name: 'Binary-Bonded Core',
      technical_specifications: 'Neural link tightening for Headmasters/Powermasters.',
      effect: 'Transformation/Docking becomes a Move Action; +2 Initiative bonus when docked.'
    },
    {
      name: 'Matrix Port Integration',
      technical_specifications: 'Advanced port for accepting Titan Master Legendary Power Source.',
      requirement: 'Required to access Titan Master Power Ups (Feats, Spells, Skills).'
    },
    {
      name: 'Intergon Overclock',
      technical_specifications: 'Master Suit mod for emergency energy dump.',
      effect: 'Free Action: Deplete backup supply to add 2d6 damage to next attack. Requires sleep to restore.'
    },
    {
      name: 'Neural-Link GPS Expansion',
      technical_specifications: 'Telepathic range and data processing upgrade.',
      effect: '+10 Equipment bonus to Navigate/Survival; cannot be flanked while docked.'
    },
    {
      name: 'Skill-Bridge Buffer',
      technical_specifications: 'Processor upgrade for stable skill transfer.',
      effect: 'Increases Skill Bridge bonus by +2 for any skill with at least 1 rank.'
    },
    {
      name: 'Breastforce',
      technical_specifications: 'Small chest-plate partners transforming into weapons or animals.'
    },
    {
      name: 'Brainmasters',
      technical_specifications: 'Small pilots that slide into chest to reveal face and boost stats.'
    },
    {
      name: 'Armor-Masters / Power Core',
      technical_specifications: 'Non-sentient drones or Mini-Cons forming external shell.',
      effect: '+3 Hardness, DR 5/-.'
    },
    {
      name: 'Action Masters',
      technical_specifications: 'Frame locked from transformation for pure combat focus.',
      effect: '+4 Attack bonus, 1 Bonus Feat.'
    },
    {
      name: 'Duocons',
      technical_specifications: 'Two vehicles that combine into one robot form.'
    },
    {
      name: 'Spark-Eaters / Terrorcons',
      technical_specifications: 'Viral energy-draining corruption tech.',
      effect: 'Melee deals 1d4 CON drain; gain DR 10/Energon.'
    },
    {
      name: 'Omnibots / Autorovers',
      technical_specifications: 'Advanced internal sensors and reactive movement.',
      effect: 'Uncanny Dodge, +4 Initiative.'
    },
    {
      name: 'Firecons / Sparkabots',
      technical_specifications: 'Integrated friction-spark weapons for bonus fire damage.'
    },
    {
      name: 'Cassette (Mini-Cassette)',
      technical_specifications: 'Miniaturized independent robotic organisms designed for espionage.',
      abilities: 'Infiltration Specialists (Stealth/Computer Use), Team Unit (Protector/Squad bond).',
      modes: 'Robot/Beast Mode (Combat) and Cassette Mode (Storage/Object).',
      docking: 'Internal docking in Leader\'s chest compartment for stealthy transport.'
    },
    {
      name: 'Titan Master (Variable Tech-Suit)',
      technical_specifications: 'Class I Mecha for humanoid pilot. Tactical bridge and power battery.',
      modes: 'Humanoid (+8 AC), Hover Bike (60ft flight), Weapon (Large firearm), Legendary Power Source.',
      docking: 'Overcharge (Accuracy/Damage), Targetmaster Bonus, Titan Blast (One-shot high power).',
      stats: 'Full Power (Pilot inside) vs Reduced Power (Autonomous AI).'
    },
    {
      name: 'Matrix: Finalized Level 20 Legend Stats',
      technical_specifications: 'Final hardware evolution for Level 20 players.',
      stats: 'STR 24, DEX 18, CON 24, CHA +10 (Legendary Spike). ADR 20.',
      specializations: 'Covenant (WIS/CHA), Synergy (DEX/WIS), Amplification (CON/STR), Multi-Thread (INT/CHA), Aero-Logic (STR/INT), Architect (STR/CON), Source Code (Physical), Kinetic (STR/DEX).',
      epic_mode: 'Redline Output (10 Rounds): Double CHA modifier. Limit Breaks: Purifier, Omega Fusion, Colossus, Grand Force, Vanguard, World-Speaker, Primordial, Energon Flare.'
    }
  ],
  equipment: [
    {
      name: 'Thermal Shield (PL 7)',
      technical_specifications: 'High-density heat dissipation plating.',
      effect: '+5 Hardness against Heat/Plasma damage.',
      cost: '600 Cr'
    },
    {
      name: 'Sensor Array (PL 8)',
      technical_specifications: 'Advanced multi-spectrum scanning suite.',
      effect: 'Negates Stealth from PL 5-6 units.',
      cost: '750 Cr'
    },
    { 
      name: 'Titan Master (Variable Tech-Suit)', 
      technical_specifications: 'Class I Mecha for humanoid pilot. Biological-to-mechanical interface.',
      humanoid_recharge: 'Endless Energon while pilot is inside (Bio-rhythm stabilization).',
      neural_link: 'Autonomous AI operation when pilot is external.',
      modes: 'Humanoid (+8 AC), Hover Bike (60ft flight), Weapon (Large firearm), Legendary Power Source (Docking/Recharge).',
      docking: 'Targeting & Overcharge (Accuracy/Damage increase), Titan Blast (One-shot high power), 4 Power Ups (Feats, Magic, Skills).'
    },
    { 
      name: 'Disruption Field (PL 7)', 
      technical_specifications: 'Projects a localized EMP field that grants a 20% miss chance against all incoming electronic-guided projectiles.',
      stats: 'Slots: 1 (Back), Purchase DC: 28' 
    },
    { 
      name: 'Zero-G Stabilizers (PL 6)', 
      technical_specifications: 'Advanced gyroscopic sensors and micro-thrusters that allow for precise movement in environments where physics standardly fail.',
      stats: 'Removes all maneuverability penalties in Vacuum/Zero-G environments.' 
    },
    { 
      name: 'Integrated Sensor Array (PL 6)', 
      technical_specifications: 'A suite of advanced ocular and auditory upgrades integrated directly into the mecha’s head-unit.',
      benefit: '+4 equipment bonus on Search and Spot checks.',
      special: 'Grants Darkvision 60ft and Infrared vision.'
    },
    { 
      name: 'Self-Repairing Nanites (PL 7)', 
      technical_specifications: 'A swarm of microscopic robots that constantly knit together torn metal and reroute damaged circuitry.',
      benefit: 'Fast Healing 2.',
      drawback: 'Requires 1 hour of Power Down time for every 10 HP repaired.'
    },
    { 
      name: 'Bio-Organic Chassis (PL 8)', 
      technical_specifications: 'Experimental technology that blends Cybertronian metallurgy with synthetic organic tissues.',
      benefit: 'Mecha is treated as a living creature for the purpose of healing spells and effects.',
      special: 'Hardness is reduced by 2, but HP increases by +20 per size category.'
    },
    { 
      name: 'Afterburner Module (PL 6)', 
      technical_specifications: 'An internal fuel injection system that provides a temporary surge of kinetic energy.',
      stats: '+50% Speed for 1d4 rounds; 2 minute cooldown.' 
    },
    { 
      name: 'Magnetic Shielding (PL 6)', 
      technical_specifications: 'A network of superconducting coils creates a localized magnetosphere.',
      benefit: 'Resistance 10 vs. Ion/Electricity damage.',
      bonus: '+4 equipment bonus to saves against EMP-based paralysis.'
    },
    {
      name: 'Stasis Repair Kit (PL 5)',
      technical_specifications: 'Essential medical gear for Cybertronian field repair.',
      benefit: 'Required to wake a unit from Stasis Lock. DC 20 Repair check restores 1d10 HP and brings unit online.',
      cost: 'Purchase DC 15'
    },
    {
      name: 'Energon Fuel Cell (Standard)',
      technical_specifications: 'High-density energy storage for "Million Year" old engines.',
      requirement: 'Standard bots require 1 cell per 24 hours of active operation. High-output actions (AP use) drain cells faster.',
      cost: 'Purchase DC 12'
    },
    {
      name: 'Human-Scale Tactical Link (Relic)',
      technical_specifications: 'Interface device for Human partners.',
      benefit: 'Allows Human to use their own Feats (Point Blank Shot, etc.) through the Chassis-mounted weapons as Competence Bonuses.',
      special: 'Acts as the primary filter for the Dark Energy Aura.'
    },
    {
      name: 'Nanomorphic Master Suit (Tier IV)',
      technical_specifications: 'Standard skin-tight nanotech interface for high-speed synchronization.',
      benefit: 'Unlocks Precision, Reactive, Vitality, and Overdrive Sync Power-Ups.',
      cost: 'Purchase DC 25'
    },
    {
      name: 'Headmaster Modification',
      technical_specifications: 'Hardware for binary-bonded "backpack" and face-docking.',
      benefit: 'Required for Headmaster Prestige Class.'
    },
    {
      name: 'Powermaster Modification',
      technical_specifications: 'Hardware for engine-lock and fusion core integration.',
      benefit: 'Required for Powermaster Prestige Class.'
    },
    {
      name: 'Titan Master Modification',
      technical_specifications: 'Hardware for 4-mode variable tech-suit and AI link.',
      benefit: 'Required for Titan Master Prestige Class.'
    },
    {
      name: 'Targetmaster/Weapon Modification',
      technical_specifications: 'Hardware for transformation into a mecha-scale weapon.',
      benefit: 'Required for Targetmaster Prestige Class.'
    },
    {
      name: 'Master Suit (The Mecha-Frame)',
      technical_specifications: 'PL 6-7 High-Antiquity Exoskeleton / Life Support.',
      shielding: 'Environmental Shielding: Vacuum-sealed, reinforced. Immunity to extreme temp/G-forces.',
      buffer: 'Energy Buffer: Surge protector for organic nervous system.',
      stats: 'Strength: 18, AC: +8 Equipment Bonus, ADR: 10.',
      transformations: [
        { mode: 'Head-Unit', bonus: '+10 Insight to Atk/Init, True Seeing 120ft.' },
        { mode: 'Weapon-Unit', bonus: 'Ignore DR/Hardness, +4d12 Energy damage.' },
        { mode: 'Engine-Unit', bonus: '+20ft Speed, 1 extra Standard Action (Burst Mode).' }
      ]
    },
    {
      name: 'Master Suit (Godmaster Interface)',
      technical_specifications: 'PL 7 Bio-link chassis. Engine and Spark-Core replacement.',
      engine_soul: 'Internal Cavity docking. Molecular Conversion of bio-energy to Energon.',
      stats: 'Pilot Inside (AC +10, Hardness 15, HP 50, God-Fire) vs Autonomous (AC +5, Hardness 7, HP 25, Guard Mode).'
    }
  ],
  weapons: [
    {
      name: 'Energon Blaster (PL 7)',
      damage: '4d10',
      technical_specifications: 'Standard military issue energy weapon.',
      effect: 'Ignores 5 Hardness.',
      cost: '500 Cr'
    },
    {
      name: 'Fusion Cannon (PL 8)',
      damage: '6d12',
      range: '120 ft',
      technical_specifications: 'Heavy draw plasma weapon.',
      effect: 'Heavy Draw (Full-round action to fire).',
      cost: '1,500 Cr'
    },
    {
      name: 'Vibro-Blade (PL 7)',
      damage: 'Str + 2d6',
      technical_specifications: 'High-frequency vibrating melee weapon.',
      effect: 'Bypasses PL 5-6 Armor.',
      cost: '400 Cr'
    },
    {
      name: 'Null Ray (PL 8)',
      damage: '3d10',
      technical_specifications: 'Electromagnetic pulse projector.',
      effect: 'Disables T-Cog (1 turn) on hit.',
      cost: '1,200 Cr'
    },
    { name: 'Ion Blaster', damage: '2d10', range: 'Long', type: 'Energy' },
    { name: 'Fusion Cannon', damage: '4d12', range: 'Medium', type: 'Plasma' },
    { name: 'Star Saber', damage: '5d10', range: 'Melee', type: 'Physical/Energy' },
    { name: 'Null Ray', damage: '1d8', range: 'Long', type: 'EMP' },
    { 
      name: 'V-14 Antimatter Cannon (PL 8)', 
      technical_specifications: 'Fires tiny particles of antimatter that consume matter and produce a massive energy output.',
      damage: '10d12', 
      critical: '6d12 splash to adjacent squares on critical hit', 
      range_increment: '200 ft (Max 2,000 ft)', 
      equipment_slots: '2 (Hand, Arm, or Shoulder)' 
    },
    { 
      name: 'IC-A Heavy Ion Cannon (PL 6)', 
      technical_specifications: 'Functions in exactly the same way as the subduer ion cannon, but deals 8d6 points of ion damage.',
      damage: '8d6 (Ion)', 
      special: 'Functions as subduer ion cannon', 
      purchase_dc: '26' 
    },
    {
      name: 'Neutron Assault Rifle',
      technical_specifications: 'High-output ballistic/energy hybrid weapon.',
      damage: '4d10',
      range: '120 ft',
      notes: 'Ignores first 5 points of Hardness.'
    }
  ],
  vehicles: [
    { 
      name: 'Light Frame', 
      technical_specifications: 'A lightweight chassis that sacrifices armor for extreme mobility.',
      stats: 'Size: Medium, Defense: +2, Speed: 60ft, Strength: 12, Constitution: 10'
    },
    { 
      name: 'Medium Frame', 
      technical_specifications: 'The most common mecha frame, suitable for a wide range of roles.',
      stats: 'Size: Large, Defense: +5, Speed: 40ft, Strength: 18, Constitution: 14'
    },
    { 
      name: 'Heavy Frame', 
      technical_specifications: 'A heavy-duty frame capable of mounting the most powerful weaponry.',
      stats: 'Size: Huge, Defense: +10, Speed: 20ft, Strength: 26, Constitution: 20'
    },
    {
      name: 'Tiny Cybertronian Frame (Master-Class)',
      technical_specifications: 'Autonomous companion bot for Level 11+ Ports.',
      stats: 'Size: Tiny, AC +4, Atk -2, Stealth +8, Hardness 5.',
      link: 'Robot Brain Link: Larger frame can use Tiny bot\'s INT/WIS/CHA. Tiny bot can operate auxiliary systems.'
    },
    {
      name: 'Ark-Class / Nemesis-Class',
      category: 'Starship-Scale Mapping',
      technical_specifications: 'Sentient fortresses. At this scale, frame logic shifts to Starship combat rules while maintaining the Character stat block for the Spark-core pilot.',
      size: 'Colossal (Starship Scale)',
      defense_penalty: '-16',
      hardness: '30',
      hp: '2,000+'
    }
  ],
  technical: [
    {
      name: 'The Technician\'s Shop: Services',
      technical_specifications: 'Reconstruction and parts costs.',
      services: [
        { item: 'Body Download', desc: 'Spark transfer to new Voyager Frame', autobot: '2,000 Cr', decepticon: '4,000 Cr' },
        { item: 'T-Cog Replacement', desc: 'Restores Alt-Mode functionality', autobot: '800 Cr', decepticon: '1,500 Cr' },
        { item: 'Limb Replacement', desc: 'Single arm or leg (Standard Voyager)', autobot: '400 Cr', decepticon: '800 Cr' },
        { item: 'Optic Sensor Repair', desc: 'Fixes blinded/damaged sensors', autobot: '200 Cr', decepticon: '500 Cr' },
        { item: 'Shell Patching', desc: 'Full restoration of PL 5-6 Shell HP', autobot: '100 Cr', decepticon: '300 Cr' },
        { item: 'Armor Refit', desc: 'Increases Shell Hardness by +2', autobot: '500 Cr', decepticon: '1,000 Cr' }
      ]
    },
    {
      name: 'Transector Mecha Frame: Core Rules',
      technical_specifications: 'Fundamental operational constraints.',
      rules: [
        'Voyager (Medium) is the standard size for PCs/NPCs.',
        'Size Evolution: Leap size categories every 10th level, skipping Large (Leader).',
        'Gimmick Evolution: One Hardwired Gimmick at Level 1; new slot every 11th level.',
        'Targeting Floor: Voyager+ cannot target humans/infantry; only Minicons/Scouts can.',
        'Hybrid Build: Internal skeleton PL 7-8; external shell PL 5-6.',
        'The Spark (SSD): Permanent death requires vaporization or Nat 20 headshot.',
        'Maintenance: Structual failures require buying/building parts.',
        'Repair Economy: Autobots (Cause-driven/Cheap) vs Decepticons (Mercenary/Expensive).'
      ]
    },
    {
      name: 'Frame Access Hierarchy',
      technical_specifications: 'Level-locking for heavy and epic frames.',
      hierarchy: [
        { frame: 'Minicon', size: 'Tiny', req: 'Standard Access' },
        { frame: 'Scout', size: 'Small', req: 'Standard Access' },
        { frame: 'Voyager', size: 'Medium', req: 'Standard Character Cap' },
        { frame: 'Leader', size: 'Large', req: 'Level 15+ OR Matrix Holder' },
        { frame: 'Epic', size: 'Huge', req: 'Level 20+ OR Matrix Holder' },
        { frame: 'Combiner', size: 'Gargantuan', req: 'Combiner Component Required' },
        { frame: 'Star Saber', size: 'Colossal', req: 'Titan / Cosmic Level Only' }
      ]
    },
    { 
      name: 'Jumpstarters', 
      technical_specifications: 'Auto-Transformation system.',
      function: 'Gains Reactive Transformation gadget. Transformation becomes a Reflex-based Free Action triggered by Initiative or attack.'
    },
    { 
      name: 'Triggerbots', 
      technical_specifications: 'Internal Weapon Pods.',
      function: 'Hidden Compartment slots. Deploying weapons is a Free Action. +4 bonus to hide weapon existence.'
    },
    { 
      name: 'Powerdashers', 
      technical_specifications: 'Motor-Driven Speed.',
      function: 'Overdrive gadget. Double Base Land Speed for 1d4 rounds once per encounter. DC 15 Fort save or become Fatigued.'
    },
    { 
      name: 'Pretender (External Shell)', 
      technical_specifications: 'Organic Camouflage (PL 7).',
      function: '+10 Equipment bonus to Disguise. Damage is dealt to Shell\'s HP (50 HP) before the bot.'
    },
    { 
      name: 'Computer Virus / Hacking', 
      technical_specifications: 'Because a Transformer is a sentient machine, they are susceptible to digital intrusion.',
      attack: 'Computer Use check vs. Mecha Defense (Special).',
      effect: 'System Shutdown (1d4 rounds) or Command Override (Will Save DC 15 + Hacker Int Mod).'
    },
    {
      name: 'Sensor Baffler (Anti-Hacking)',
      technical_specifications: 'Throws up an interference field to prevent enemy sensors from establishing a solid data-handshake.',
      stats: 'Effect: -10 penalty to all Computer Use checks made to scan/hack the mecha'
    },
    { system: 'Transformation Cog', function: 'Manages the mapping of robot parts to alt-mode parts.' },
    { system: 'Processor Core', function: 'The central intelligence unit; handles logic and memory.' },
    { system: 'Energon Pump', function: 'Circulates fuel throughout the chassis.' },
    { 
      name: 'Adding Equipment Slots', 
      technical_specifications: 'Each additional slot increases the purchase DC of the mecha by 1.',
      constraint: 'No body part can have more than one additional slot', 
      cost: '+1 Purchase DC per additional slot' 
    },
    {
      name: 'Frame Access Hierarchy',
      technical_specifications: 'Restricted access to heavy/epic tiers.',
      tier_1: 'Standard Access (Minicon, Scout, Standard).',
      tier_2: 'Level 15+ / Matrix / Combiner Gate (Leader, Epic, Combiner, Supreme).',
      tier_3: 'Cosmic Circumstance (Titan, Cosmic).'
    },
    {
      name: 'Master Progression System',
      technical_specifications: 'Earned prestige levels requiring specific hardware.',
      hardware: 'Master Suits (Nanomorphic Tier IV, Head/Power/Titan/Target modifications).',
      prestige: 'Master Classes (Pilot, Headmaster, Engine-Steward, Commander, Targetmaster).'
    },
    {
      name: 'Hardware Hierarchy (Dual Time)',
      technical_specifications: 'Modular platforms separating hardware from pilot skill.',
      standard: 'Plug-and-Play: Universal ports (Titan Master Receptacle) usable by anyone.',
      prestige: 'Duo Khan Mastery: Software license to unlock Dual Composite/AI-swarm modes.'
    },
    {
      name: 'Transformer Port Registry',
      technical_specifications: 'Neural-Energon Interface sockets for physical/data integration.',
      registry: [
        { port: 'Cervical', location: 'Neck/Head', function: 'Headmaster/Titan Master interface; grants Mental Fortress.' },
        { port: 'Chassis', location: 'Torso/Engine', function: 'Powermaster interface; required for Fast Healing/Titan Blast.' },
        { port: 'Matrix', location: 'Center Chest', function: 'Legendary socket; required to unlock 4 Power-Ups.' },
        { port: 'Tactical', location: 'Forearms/Palms', function: 'Targetmaster interface; weapon handshake for +2 Atk/Damage.' },
        { port: 'Carapace', location: 'Chest/Shoulders', function: 'Armor-Con interface; applies Hardness bonus to entire frame.' },
        { port: 'Pylon', location: 'Shoulders/Knees', function: 'Combiner/Gestalt structural locks.' }
      ],
      rules: 'Capacity equal to CON modifier. Installation cost relative to Frame Size.'
    },
    {
      name: 'Master Reference Table',
      technical_specifications: 'Operational metrics for DMs.',
      transformation_time: '1 Full Round (Standard); Swift Action (Triple Changer).',
      inhabitant_capacity: 'Titans: 100–150 units.',
      save_dcs: 'Gimmick activation (Headmasters/Combiners) typically DC 15-25.'
    }
  ],
  size: [
    { class: 'MINI-CON', height: '1-4 ft', attack_def: '+2', grapple: '-8', hide: '+8', reach: '0 ft', base_str: '12', base_dex: '18', example: 'Master Series / Cassette', rules: 'Human Scale Precision.' },
    { class: 'SCOUT', height: '4-8 ft', attack_def: '+1', grapple: '-4', hide: '+4', reach: '5 ft', base_str: '16', base_dex: '16', example: 'Cliffjumper, Seaspray', rules: 'Bridge to Human Scale.' },
    { class: 'HUMAN', height: '5-7 ft', attack_def: '+0', grapple: '+0', hide: '+0', reach: '5 ft', base_str: '10', base_dex: '10', example: 'Baseline Organic', rules: 'The System Baseline.' },
    { class: 'STANDARD', height: '8-16 ft', attack_def: '-1', grapple: '+0', hide: '+0', reach: '5 ft', base_str: '22', base_dex: '14', example: 'Biotransector (Jazz, Blaster)', rules: 'Scale Break: Splash only for humans.' },
    { class: 'LEADER', height: '16-32 ft', attack_def: '-2', grapple: '+4', hide: '-4', reach: '10 ft', base_str: '28', base_dex: '12', example: 'Matrix Bearer Chassis', rules: 'Matrix-Compatible. +80 HP.' },
    { class: 'EPIC', height: '32-60 ft', attack_def: '-4', grapple: '+8', hide: '-8', reach: '15 ft', base_str: '38', base_dex: '8', example: 'Power-up / Heavy (Jetfire)', rules: 'Solo Giant. +160 HP.' },
    { class: 'COMBINER', height: '60-100 ft', attack_def: '-8', grapple: '+16', hide: '-16', reach: '30 ft', base_str: '50', base_dex: '6', example: 'Gestalt Class', rules: '+320 HP. Requires AP to maintain.' },
    { class: 'STAR SABER', height: '120ft+', attack_def: '-8', grapple: '+16', hide: '-16', reach: '30 ft', base_str: '60+', base_dex: '4', example: 'Supreme Commander', rules: '+640 HP. Ignores penalties vs Combiners.' },
    { class: 'TITAN', height: '800m+', attack_def: 'Special', grapple: 'Special', hide: 'N/A', reach: 'N/A', example: 'Metroplex', special: 'Invulnerable (External). Hardness 20. DR 20/-.' },
    { class: 'COSMIC', height: 'Planetoid', attack_def: 'N/A', grapple: 'N/A', hide: 'N/A', reach: 'N/A', example: 'Unicron', special: 'God-Tier. Only fights other Cosmic.' },
  ],
  race: [
    { 
      name: 'The Exiles', 
      origin: 'Iacon', 
      philosophy: 'Freedom is the right of all sentient beings.',
      lore: 'Faction defined by bravery and sacrifice. A symbol of hope fighting for justice.'
    },
    { 
      name: 'The Tyrants', 
      origin: 'Kaon', 
      philosophy: 'Peace through tyranny.',
      lore: 'Primary antagonists reveling in war. Rely on overwhelming firepower and Sinister technology.'
    },
    { 
      name: 'The Animechs', 
      origin: 'Tribal', 
      philosophy: 'Avoidance and protection.',
      lore: 'Tribes taking animalistic forms. Mystical connection to Nexus Energy.'
    },
    { 
      name: 'Humans (Terrans)', 
      origin: 'Earth', 
      philosophy: 'Survival and expansion.',
      lore: 'Dominant species of Earth. Self-destructive and prone to warring. Some form bonds as companions.'
    },
    { name: 'Quintesson', origin: 'Unknown', philosophy: 'Order through manipulation.' },
    { name: 'Junkion', origin: 'Junkion', philosophy: 'Survival through recycling.' },
    { 
      name: 'Nebulon', 
      origin: 'Nebulos', 
      philosophy: 'Science and engineering mastery.',
      traits: 'Small size, Speed 20ft, STR -2, DEX +2, INT +2. Green-Blooded (+4 Save vs Poison/Rad), Tech Natural, Neural Compatibility.'
    }
  ],
  magic: [
    { name: 'Spark Pulse', cost: '20 Energon', effect: 'Release a shockwave that disables nearby electronics.' },
    { name: 'Matrix Resonance', cost: '50 Energon', effect: 'Heal all nearby allies and restore their spark energy.' },
    { name: 'Void Shift', cost: '30 Energon', effect: 'Briefly phase out of reality to avoid all damage.' },
    { name: 'Electro-Disruptor', cost: '25 Energon', effect: 'Invisibility (Mirage-style) for 1 minute.' },
    { name: 'Energon Overdrive', cost: '30 Energon', effect: 'Haste effect; double actions for 3 rounds.' },
    { name: 'Forcefield Generator', cost: '20 Energon', effect: 'Shield effect; +4 AC for 5 rounds.' },
    { name: 'Displacement Wand', cost: '40 Energon', effect: 'Short-range teleportation (Skywarp-style).' },
  ],
  skills: [
    { name: 'Infiltration', type: 'Dexterity', description: 'Bypassing security and remaining undetected.' },
    { name: 'Cyber-Surgery', type: 'Intelligence', description: 'Repairing critical internal damage.' },
    { name: 'Ballistics', type: 'Perception', description: 'Accuracy with long-range energy weapons.' },
    { name: 'Alt-Mode Mastery', type: 'Constitution', description: 'Handling and speed in vehicle form.' },
    { name: 'Pilot', type: 'Dexterity', description: 'Seeker flight maneuvers and aerial dogfighting.' },
    { name: 'Computer Use', type: 'Intelligence', description: 'Titan awakening and data-espionage.' },
    { name: 'Repair', type: 'Intelligence', description: 'Replacing "Heal" for bots; used with Modular Replacement.' },
    { name: 'Knowledge (Tactics)', type: 'Intelligence', description: 'Used with Call of the Primes and Gestalt coordination.' },
  ],
  feats: [
    { name: 'Rapid Transformation', description: 'Reduce transformation time to a single swift action.' },
    { name: 'Armor Hardening', description: 'Permanently increase damage reduction by 5 points.' },
    { name: 'Energon Surge', description: 'Briefly double weapon damage at the cost of high heat.' },
    { name: 'Aerial Ace', description: 'Gain advantage on all maneuvers while in flight mode.' },
    { 
      name: 'Evolving Power (Form)', 
      technical_specifications: 'One of the Mechamorph powers evolves into something else of a similar nature.',
      prerequisite: 'Mechamorph.',
      benefit: 'Increase power rank and evolve its function.'
    },
    { 
      name: 'Nanite Evolution (Form)', 
      technical_specifications: 'The Mechamorph nanites evolve in such a way that a new special power is granted.',
      benefit: 'Gain a new rank one special power. May be taken multiple times.'
    },
    { name: 'Commando Training', description: 'Essential for "Primal" beasts and front-line warriors.' },
    { name: 'Exotic Firearms (Heavy)', description: 'Required for bot-scale Fusion Cannons and Null-rays.' },
    { name: 'Target Acquisition', description: 'Used to bypass scale penalties on long-range shots.' },
    { name: 'Teamwork', description: 'Required for Combiners to stay joined during combat.' },
    { name: 'Evasive Maneuvers', description: 'Essential for Jet-mode Seekers and high-speed units.' },
    { name: 'Gear Gadgets', description: 'Used to buy extra Shell Slots during leveling.' },
  ],
  experience: [
    { level: 1, xp: 0, rewards: 'Base Stats' },
    { level: 2, xp: 1000, rewards: 'New Skill Point' },
    { level: 3, xp: 3000, rewards: 'New Feat' },
    { level: 4, xp: 6000, rewards: 'Stat Increase' },
    { level: 5, xp: 10000, rewards: 'Alt-Mode Upgrade' },
  ],
  dictionary: [
    { term: 'Alt-Mode', definition: 'The secondary form a Cybertronian takes (vehicle, beast, etc).' },
    { term: 'Spark', definition: 'The soul and life-force of a Cybertronian.' },
    { term: 'Energon', definition: 'The primary fuel and blood-equivalent of Cybertronians.' },
    { term: 'T-Cog', definition: 'The organ responsible for the transformation process.' },
    { term: 'Transtector', definition: 'A non-sentient Cybertronian body or frame designed to be piloted or bonded.' },
    { term: 'Binary-Bond', definition: 'A neural and physical link between two sentient entities, typically a humanoid and a Cybertronian.' },
    { term: 'Spark-Core', definition: 'The central housing for the Spark, often integrated with the processor.' },
    { term: 'Nebulon', definition: 'A humanoid species from the planet Nebulos, pioneers of the Master process.' },
    { term: 'Gestalt', definition: 'The combined form of multiple Cybertronians acting as a single entity.' },
  ],
  titans: [
    {
      name: 'Sentinel Frame (Native)',
      technical_specifications: 'Unified, self-contained PL 8 chassis. The gold standard of Cybertronian evolution.',
      origin: 'Indigenous / Natural.',
      brain: 'Integrated Spark hard-wired into permanent PL 8 core.',
      transformation: 'Instinctual biological function.',
      autonomy: 'Full; mind and body are one entity.',
      head: 'Permanent limb; cannot be removed without catastrophic failure.'
    },
    {
      name: 'Transtector Frame (Nebulon-Enhanced)',
      technical_specifications: 'Modular, interfaced PL 8 chassis. Engineered as a suit for tiered intelligence.',
      origin: 'Modular / Engineered.',
      brain: 'Interfaced; possesses baseline AI and automated systems. Can defend itself independently.',
      transformation: 'Command-Driven; requires "Master Key" docking to unlock Robot Mode.',
      interface_tech: 'PL 6-7 (Lower 8) Nebulon Port.',
      autonomy: 'Partial (Automated AI/Drone systems).',
      head: 'Removable Interface Port; body remains a viable fortress if head is lost.'
    },
    {
      name: 'Nebulon Double-Binary Architecture',
      technical_specifications: 'Tiered Intelligence circuit (3 distinct entities).',
      tier_1: 'Primary Core (Headmaster): Minicon scale, PL 7. The Moral Compass and Primary Processor.',
      tier_2: 'Interface Unit (Titan Head): Voyager scale, PL 7 (Lower 8 Bridge). The Tactical Commander.',
      tier_3: 'Chassis (Titan Body): Titan scale, PL 8. The Brute Force and Infrastructure.',
      integration_chain: 'Minicon (Scout) -> Voyager (Command) -> Master Key (Tier 1+2) -> Full Titan (Tier 1+2+3).'
    },
    {
      name: 'Universal Titan Modes',
      technical_specifications: 'Hard-wired states for every Titan-class frame.',
      modes: 'Robot (Combat), City (Logistical Hub), Vehicle (Surface Transit), Space Ship (Interstellar Vessel).',
      capacity: '100-150 inhabitants; internal corridors remain stable during 1-round transformation.'
    }
  ],
  meta: [
    {
      name: 'Final Rulebook Draft Instructions',
      role: 'Technical Editor',
      constraints: [
        'No Conversational Filler: Remove all intros and filler text.',
        'Prioritize Updates: Later information overrides earlier contradictions.',
        'Organize by Category: Frame System, Gimmick Rules, Titan Architecture, Combiner Rules.',
        'Format: Bolded headers and bulleted technical specs only. Maintain d20/PL terminology.'
      ]
    }
  ],
  glossary: [
    { term: 'Glitch', definition: 'A derogatory term for a malfunctioning or low-status unit.' },
    { term: 'Rust Plague', definition: 'A deadly viral infection that decays Cybertronian metal.' },
    { term: 'The Pit', definition: 'The Cybertronian equivalent of the afterlife or a deep abyss.' },
  ],
};
