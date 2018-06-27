class Emitter {
	
	/**
	 * Создает экземпляр класса Emitter.
	 * @memberof Emitter
	 */
	constructor() {
		this.eventHandlers = {};
	}

	/**
	 * связывает обработчик с событием
	 *
	 * @param {String} event - событие
	 * @param {Function} handler - обработчик
	 * @memberof Emitter
	 */
	on(event, handler) {
		if (!this.eventHandlers[event]) {
			this.eventHandlers[event] = [];
		}
		this.eventHandlers[event].push(handler);
	}

	/**
	 * Генерирует событие -- вызывает все обработчики, связанные с событием и
	 *                       передает им аргумент data
	 *
	 * @param {String} event
	 * @param {*} data
	 * @memberof Emitter
	 */
	emit(event, data) {
		if (this.eventHandlers[event]) {
			this.eventHandlers[event].forEach(handler => {
				handler.call(null, data);
			});
		}
	}
}

export default Emitter;
