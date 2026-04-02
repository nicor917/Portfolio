# Instructions de déploiement sur Vercel

## ✅ Code déjà poussé sur GitHub

Le code a été poussé avec succès sur : https://github.com/nicor917/Portfolio

## 🚀 Déploiement sur Vercel

### Option 1 : Via l'interface Vercel (Recommandé)

1. **Connecte-toi à Vercel** : https://vercel.com
   - Utilise ton compte GitHub pour te connecter

2. **Importe ton projet** :
   - Clique sur "Add New..." → "Project"
   - Sélectionne le repository `nicor917/Portfolio`
   - Clique sur "Import"

3. **Configure le projet** :
   - **Root Directory** : `src/html` (⚠️ IMPORTANT)
   - **Framework Preset** : Other
   - **Build Command** : (laisse vide)
   - **Output Directory** : (laisse vide)
   - **Install Command** : (laisse vide)

4. **Déploie** :
   - Clique sur "Deploy"
   - Attends quelques secondes
   - Ton site sera en ligne ! 🎉

### Option 2 : Via la CLI Vercel

```bash
# Installe Vercel CLI
npm i -g vercel

# Connecte-toi à Vercel
vercel login

# Déploie depuis le dossier Portfolio
cd c:\Portfolio
vercel

# Suis les instructions :
# - Set up and deploy? Y
# - Which scope? (ton compte)
# - Link to existing project? N
# - Project name? Portfolio
# - Directory? src/html
# - Override settings? N
```

## 📝 Notes importantes

- Le fichier `vercel.json` est déjà configuré pour servir depuis `src/html`
- Tous les chemins relatifs sont déjà corrects
- Les images et fichiers CSS/JS devraient fonctionner automatiquement

## 🔗 Après le déploiement

Une fois déployé, tu recevras une URL du type :
- `https://portfolio-xxx.vercel.app`

Tu peux ensuite :
- Ajouter un domaine personnalisé dans les paramètres Vercel
- Configurer un nom de domaine personnalisé si tu en as un

## 🐛 En cas de problème

Si les images ou fichiers ne se chargent pas :
1. Vérifie que le "Root Directory" est bien `src/html` dans Vercel
2. Vérifie que tous les chemins relatifs commencent par `../` depuis les pages projets
3. Consulte les logs de déploiement dans Vercel pour voir les erreurs


