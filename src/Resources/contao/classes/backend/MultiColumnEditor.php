<?php

namespace HeimrichHannot\MultiColumnEditor\Backend;

class MultiColumnEditor {
    public static function getRowByKeyValue($strKey, $varValue, array $arrArray)
    {
        foreach ($arrArray as $arrRow)
        {
            if ($arrRow[$strKey] == $varValue)
                return $arrRow;
        }

        return false;
    }

    public static function fetchEach($strKey, array $arrArray)
    {
        $arrResult = [];

        foreach ($arrArray as $arrRow)
        {
            if (isset($arrRow[$strKey]))
            {
                $arrResult[] = $arrRow[$strKey];
            }
        }

        return $arrResult;
    }
}