const result = document.getElementById('result');

function calcDps() {
    let minDmg = document.getElementById('min-weapon-dmg').value;
    let maxDmg = document.getElementById('max-weapon-dmg').value;
    let wepBonus = document.getElementById('weapon-bonus').value / 100;
    let wepCooldown = document.getElementById('weapon-cooldown').value;
    let bonusDmg = document.getElementById('player-bonus-dmg').value;
    let critBonus = document.getElementById('crit-bonus').value / 100;
    let critChance = document.getElementById('crit-chance').value / 100;
    let playerCooldown = document.getElementById('player-cooldown').value / 100;

    let baseDmg = (+minDmg + +maxDmg) / 2;
    let avgDmg = ((baseDmg + bonusDmg * wepBonus) * (1 + critBonus) * critChance) + ((baseDmg + bonusDmg * wepBonus) * (1 - critChance));
    let avgDPS = Math.round(avgDmg / (wepCooldown * (1 - playerCooldown)));
    result.innerHTML = `Avg DPS: ${avgDPS}`;
}