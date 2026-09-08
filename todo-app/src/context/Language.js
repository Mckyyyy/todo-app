import { createContext, useContext } from "react";

export const translations = {
	en: {
		language: "Language", english: "English", spanish: "Spanish", dashboard: "PERSONAL DASHBOARD",
		greeting: "Good day, let's get things done.", yourTasks: "YOUR TASKS", todoList: "My to-do list", open: "open",
		dailyFocus: "Daily focus", focusMessage: "Small steps make big progress.", todaysProgress: "Today's progress",
		addTodo: "Add a todo", add: "Add Todo", updateTodo: "Update Your Item", update: "Update", all: "All",
		openTasks: "Open tasks", completed: "Completed", totalTasks: "Total tasks", clearCompleted: "Clear completed",
		listClear: "Your list is clear.", nothingHere: "Nothing here yet.", addTask: "Add a task above to get started.",
		tryFilter: "Try another filter to see more tasks.",
	},
	es: {
		language: "Idioma", english: "Inglés", spanish: "Español", dashboard: "PANEL PERSONAL",
		greeting: "Buen día, hagamos las cosas.", yourTasks: "TUS TAREAS", todoList: "Mi lista de tareas", open: "abiertas",
		dailyFocus: "Enfoque diario", focusMessage: "Los pequeños pasos crean grandes avances.", todaysProgress: "Progreso de hoy",
		addTodo: "Añadir una tarea", add: "Añadir", updateTodo: "Actualizar tarea", update: "Actualizar", all: "Todas",
		openTasks: "Tareas abiertas", completed: "Completadas", totalTasks: "Total de tareas", clearCompleted: "Borrar completadas",
		listClear: "Tu lista está vacía.", nothingHere: "Todavía no hay nada.", addTask: "Añade una tarea arriba para comenzar.",
		tryFilter: "Prueba otro filtro para ver más tareas.",
	},
	fr: {
		language: "Langue", english: "Anglais", spanish: "Espagnol", dashboard: "TABLEAU DE BORD PERSONNEL",
		greeting: "Bonjour, passons a l'action.", yourTasks: "VOS TACHES", todoList: "Ma liste de taches", open: "ouvertes",
		dailyFocus: "Focus du jour", focusMessage: "Les petits pas creent de grands progres.", todaysProgress: "Progres du jour",
		addTodo: "Ajouter une tache", add: "Ajouter", updateTodo: "Modifier la tache", update: "Modifier", all: "Toutes",
		openTasks: "Taches ouvertes", completed: "Terminees", totalTasks: "Total des taches", clearCompleted: "Effacer les taches terminees",
		listClear: "Votre liste est vide.", nothingHere: "Rien ici pour le moment.", addTask: "Ajoutez une tache ci-dessus pour commencer.",
		tryFilter: "Essayez un autre filtre pour voir plus de taches.",
	},
	de: {
		language: "Sprache", english: "Englisch", spanish: "Spanisch", dashboard: "PERSONLICHES DASHBOARD",
		greeting: "Guten Tag, lass uns Dinge erledigen.", yourTasks: "DEINE AUFGABEN", todoList: "Meine Aufgabenliste", open: "offen",
		dailyFocus: "Tagesfokus", focusMessage: "Kleine Schritte bringen grossen Fortschritt.", todaysProgress: "Fortschritt heute",
		addTodo: "Aufgabe hinzufugen", add: "Hinzufugen", updateTodo: "Aufgabe aktualisieren", update: "Aktualisieren", all: "Alle",
		openTasks: "Offene Aufgaben", completed: "Erledigt", totalTasks: "Aufgaben insgesamt", clearCompleted: "Erledigte loschen",
		listClear: "Deine Liste ist leer.", nothingHere: "Noch nichts vorhanden.", addTask: "Fuge oben eine Aufgabe hinzu.",
		tryFilter: "Wahle einen anderen Filter.",
	},
	pt: {
		language: "Idioma", english: "Ingles", spanish: "Espanhol", dashboard: "PAINEL PESSOAL",
		greeting: "Bom dia, vamos realizar as tarefas.", yourTasks: "SUAS TAREFAS", todoList: "Minha lista de tarefas", open: "abertas",
		dailyFocus: "Foco diario", focusMessage: "Pequenos passos geram grandes progressos.", todaysProgress: "Progresso de hoje",
		addTodo: "Adicionar uma tarefa", add: "Adicionar", updateTodo: "Atualizar tarefa", update: "Atualizar", all: "Todas",
		openTasks: "Tarefas abertas", completed: "Concluidas", totalTasks: "Total de tarefas", clearCompleted: "Limpar concluidas",
		listClear: "Sua lista esta vazia.", nothingHere: "Nada aqui ainda.", addTask: "Adicione uma tarefa acima para comecar.",
		tryFilter: "Tente outro filtro para ver mais tarefas.",
	},
	it: {
		language: "Lingua", english: "Inglese", spanish: "Spagnolo", dashboard: "BACHECA PERSONALE",
		greeting: "Buongiorno, mettiamoci al lavoro.", yourTasks: "LE TUE ATTIVITA", todoList: "La mia lista", open: "aperte",
		dailyFocus: "Focus del giorno", focusMessage: "Piccoli passi creano grandi progressi.", todaysProgress: "Progresso di oggi",
		addTodo: "Aggiungi un'attivita", add: "Aggiungi", updateTodo: "Modifica attivita", update: "Modifica", all: "Tutte",
		openTasks: "Attivita aperte", completed: "Completate", totalTasks: "Attivita totali", clearCompleted: "Cancella completate",
		listClear: "La tua lista e vuota.", nothingHere: "Ancora niente qui.", addTask: "Aggiungi un'attivita sopra per iniziare.",
		tryFilter: "Prova un altro filtro per vedere piu attivita.",
	},
	hi: {
		language: "भाषा", english: "अंग्रेज़ी", spanish: "स्पेनिश", dashboard: "व्यक्तिगत डैशबोर्ड",
		greeting: "नमस्ते, आज काम पूरा करते हैं।", yourTasks: "आपके कार्य", todoList: "मेरी कार्य सूची", open: "खुले",
		dailyFocus: "आज का फोकस", focusMessage: "छोटे कदम बड़ी प्रगति लाते हैं।", todaysProgress: "आज की प्रगति",
		addTodo: "कार्य जोड़ें", add: "जोड़ें", updateTodo: "कार्य अपडेट करें", update: "अपडेट", all: "सभी",
		openTasks: "खुले कार्य", completed: "पूर्ण", totalTasks: "कुल कार्य", clearCompleted: "पूर्ण कार्य हटाएं",
		listClear: "आपकी सूची खाली है।", nothingHere: "अभी यहां कुछ नहीं है।", addTask: "शुरू करने के लिए ऊपर कार्य जोड़ें।",
		tryFilter: "और कार्य देखने के लिए दूसरा फ़िल्टर आज़माएं।",
	},
	ar: {
		language: "اللغة", english: "الإنجليزية", spanish: "الإسبانية", dashboard: "لوحة التحكم الشخصية",
		greeting: "مرحباً، لننجز مهام اليوم.", yourTasks: "مهامك", todoList: "قائمة مهامي", open: "مفتوحة",
		dailyFocus: "تركيز اليوم", focusMessage: "الخطوات الصغيرة تصنع تقدماً كبيراً.", todaysProgress: "تقدم اليوم",
		addTodo: "أضف مهمة", add: "إضافة", updateTodo: "تحديث المهمة", update: "تحديث", all: "الكل",
		openTasks: "المهام المفتوحة", completed: "مكتملة", totalTasks: "إجمالي المهام", clearCompleted: "مسح المكتملة",
		listClear: "قائمتك فارغة.", nothingHere: "لا يوجد شيء هنا بعد.", addTask: "أضف مهمة أعلاه للبدء.",
		tryFilter: "جرب فلترًا آخر لرؤية المزيد.",
	},
	ja: {
		language: "言語", english: "英語", spanish: "スペイン語", dashboard: "パーソナルダッシュボード",
		greeting: "おはようございます。今日も進めていきましょう。", yourTasks: "あなたのタスク", todoList: "タスクリスト", open: "未完了",
		dailyFocus: "今日の集中", focusMessage: "小さな一歩が大きな進歩につながります。", todaysProgress: "今日の進捗",
		addTodo: "タスクを追加", add: "追加", updateTodo: "タスクを更新", update: "更新", all: "すべて",
		openTasks: "未完了タスク", completed: "完了", totalTasks: "合計タスク", clearCompleted: "完了を削除",
		listClear: "リストは空です。", nothingHere: "まだ何もありません。", addTask: "上からタスクを追加して始めましょう。",
		tryFilter: "別のフィルターを試してください。",
	},
	zh: {
		language: "语言", english: "英语", spanish: "西班牙语", dashboard: "个人仪表板",
		greeting: "早上好，让我们完成今天的任务。", yourTasks: "你的任务", todoList: "我的任务列表", open: "未完成",
		dailyFocus: "今日重点", focusMessage: "小步骤带来大进步。", todaysProgress: "今日进度",
		addTodo: "添加任务", add: "添加", updateTodo: "更新任务", update: "更新", all: "全部",
		openTasks: "未完成任务", completed: "已完成", totalTasks: "任务总数", clearCompleted: "清除已完成",
		listClear: "列表为空。", nothingHere: "这里还没有内容。", addTask: "在上方添加任务开始吧。",
		tryFilter: "尝试其他筛选条件。",
	},
};

export const languageNames = {
	en: "English", es: "Español", fr: "Français", de: "Deutsch", pt: "Português",
	it: "Italiano", hi: "हिन्दी", ar: "العربية", ja: "日本語", zh: "中文",
};

export const LanguageContext = createContext(null);

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used inside a <LanguageProvider>");
	}
	return context;
}
