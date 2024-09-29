import { Column, Model, Table } from 'sequelize-typescript';

@Table({tableName: 'Survey',timestamps: true})
export class Survey extends Model<Survey> {
    @Column
    title: string;

    @Column
    description: string;
}