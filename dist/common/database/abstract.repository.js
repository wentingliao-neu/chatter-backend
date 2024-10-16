"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
class AbstractRepository {
    constructor(model) {
        this.model = model;
    }
    async create(document) {
        const createdDocument = new this.model({
            ...document,
            _id: new mongoose_1.Types.ObjectId(),
        });
        return (await createdDocument.save()).toJSON();
    }
    async findOne(filterQuery) {
        const document = await this.model.findOne(filterQuery, {}, { lean: true });
        if (!document) {
            this.logger.warn(`Document not found with filter: ${JSON.stringify(filterQuery)}`);
            throw new common_1.NotFoundException('Document not found');
        }
        return document;
    }
    async findOneAndUpdate(filterQuery, updateQuery) {
        const document = await this.model.findOneAndUpdate(filterQuery, updateQuery, { new: true, lean: true });
        if (!document) {
            this.logger.warn(`Document not found with filter: ${JSON.stringify(filterQuery)}`);
            throw new common_1.NotFoundException('Document not found');
        }
        return document;
    }
    async find(filterQuery) {
        return this.model.find(filterQuery, {}, { lean: true });
    }
    async findOneAndDelete(filterQuery) {
        return this.model.findOneAndDelete(filterQuery, {
            lean: true,
        });
    }
}
exports.AbstractRepository = AbstractRepository;
//# sourceMappingURL=abstract.repository.js.map