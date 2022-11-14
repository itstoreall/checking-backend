import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const Gen = sequelize.define(
    'Gen',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },

      value: { type: DataType.STRING, field: 'value' },
    },
    {
      tableName: 'gen',
      timestamps: false,
    }
  );

  return Gen;
};
