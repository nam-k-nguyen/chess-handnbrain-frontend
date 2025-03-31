const modeIdToName = (id) => {
    // Convert classic-duel to Classic Duel

    const name = id.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
    return name;
}
